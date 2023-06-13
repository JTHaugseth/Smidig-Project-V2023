using Microsoft.AspNetCore.Mvc;
using Stripe;
using System.Collections.Generic;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Stripe.Checkout;
using smidigAPI.Service;
using smidigAPI.Collection;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("api/payment")]
    public class PaymentController : ControllerBase
    {
        private readonly StoreService _storeService; // Declare StoreService
        private const string StripeSecretKey = "sk_test_51NGdW9I01YhOsco0IyklFoDDEMMapDdl7rI3k3LasXLVjOQPD3vlFVoRoT9V4J4XEjGpgLyNrpO9iCUI48V2Khsk00EitnTw8K";

        public PaymentController(StoreService storeService) // Inject StoreService into your constructor
        {
            _storeService = storeService; // Assign to field
        }

        [HttpPost]
        [Route("create-checkout-session")]
        public ActionResult CreateTest([FromBody] CreateTestRequest request) // Receive the itemId from the request
        {
            StripeConfiguration.ApiKey = StripeSecretKey;

            if (string.IsNullOrEmpty(request.ItemId))
            {
            return BadRequest("ItemId is required.");
            }
  
            // Use the StoreService to get the item based on the itemId
            StoreItem? item = _storeService.GetById(request.ItemId);

            if(item == null) {
                return BadRequest("Invalid itemId provided.");
            }
            
            var domain = "http://localhost:3000";
            var options = new SessionCreateOptions
            {
                PaymentMethodTypes = new List<string>
                {
                    "card",
                },
                LineItems = new List<SessionLineItemOptions>
                {
                    new SessionLineItemOptions
                    {
                        PriceData = new SessionLineItemPriceDataOptions
                        {
                            UnitAmount = (long?)(item.price * 100), //fetch price from the database based on the name
                            Currency = "usd",
                            ProductData = new SessionLineItemPriceDataProductDataOptions
                            {
                                Name = item.title, //fetch the name from database based on the name of the item they are buying
                            },
                        },
                        Quantity = 1,
                    },
                }, //?session_id={CHECKOUT_SESSION_ID}
                Mode = "payment",
                SuccessUrl = domain + "/store/shopItems?session_id={CHECKOUT_SESSION_ID}", 
                CancelUrl = domain + "/store/shopItems",
            };

            var service = new SessionService();
            Session session = service.Create(options);

            return new JsonResult(session);

        }
    }

    public class CreateTestRequest
    {
        public string? ItemId { get; set; }
    }


    public class PaymentIntentRequest
    {
        public int Amount { get; set; }
    }
}