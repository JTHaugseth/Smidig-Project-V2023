import { useLocation } from 'react-router-dom';

const Icon = (props) => {
    let location = useLocation();
    let isActive;

    if (props.isActive !== undefined) // If isActive prop is passed in, use that instead of the location check
        isActive = props.isActive;
    else // Check if the current location matches the icon's active urlLocation
        isActive = props.urlLocation === '/' ? location.pathname === props.urlLocation : location.pathname.startsWith(props.urlLocation);

        // console.log(props.size ? 'icon-' + props.size : 'icon');

    return (
        <svg
            className={`${props.size ? 'icon-' + props.size : 'icon'}`}
            version="1.1"
            width={props.width}
            height={props.height}
            viewBox={`0 0 ${props.width} ${props.height}`}
            fill={isActive ? 'var(--vizrt-color-primary)' : 'var(--vizrt-color-text-primary)'}
        >
            <g>
                <rect height={props.height} opacity="0" width={props.width} x="0" y="0" />
                <path d={props.path} />
            </g>
        </svg>
    );
}

const SceneIcon = (props) => {
    return (
        <Icon width={'23.1293'} height={'18.2316'} path={'M3.20351 18.2316L19.9258 18.2316C22.0416 18.2316 23.1293 17.1519 23.1293 15.0682L23.1293 3.17499C23.1293 1.08945 22.0416 0.00351548 19.9258 0.00351548L3.20351 0.00351548C1.0957 0.00351548 0 1.08945 0 3.17499L0 15.0682C0 17.1519 1.0957 18.2316 3.20351 18.2316ZM3.31444 16.3184C2.40643 16.3184 1.91327 15.8482 1.91327 14.8994L1.91327 3.34198C1.91327 2.39315 2.40643 1.91678 3.31444 1.91678L19.8148 1.91678C20.7149 1.91678 21.216 2.39315 21.216 3.34198L21.216 14.8994C21.216 15.8482 20.7149 16.3184 19.8148 16.3184Z'} isActive={props.isActive} urlLocation={props.urlLocation} size={props.size} />
    );
}

const ChevronDownIcon = (props) => {
    return (
        <Icon width={'17.2969'} height={'10.6957'} path={'M8.65331 10.6957C8.98534 10.6939 9.28573 10.5664 9.5326 10.307L16.9682 2.68944C17.1816 2.47597 17.2969 2.21191 17.2969 1.90273C17.2969 1.26484 16.8017 0.761722 16.1691 0.761722C15.86 0.761722 15.5721 0.885745 15.3516 1.10352L8.17519 8.46349L9.13046 8.46349L1.94705 1.10352C1.7328 0.88926 1.44667 0.761722 1.12772 0.761722C0.493355 0.761722 0 1.26484 0 1.90273C0 2.21015 0.116991 2.47421 0.326951 2.69745L7.76602 10.307C8.02891 10.5699 8.31504 10.6957 8.65331 10.6957Z'} isActive={props.isActive} urlLocation={props.urlLocation} size={props.size} />
    );
}

const ChevronRightIcon = (props) => {
    return (
        <Icon width={'9.93397'} height={'17.2969'} path={'M9.93397 8.64355C9.93045 8.31152 9.80643 8.02539 9.54354 7.77227L1.93748 0.3207C1.716 0.107226 1.45194 0 1.133 0C0.504878 0 0 0.493355 0 1.12772C0 1.4369 0.12578 1.72303 0.343551 1.9453L7.21036 8.64179L0.343551 15.3418C0.127538 15.5623 0 15.8422 0 16.1611C0 16.7937 0.504878 17.2889 1.133 17.2889C1.44843 17.2889 1.716 17.1816 1.93748 16.9601L9.54354 9.51483C9.80819 9.2537 9.93397 8.97382 9.93397 8.64355Z'} isActive={props.isActive} urlLocation={props.urlLocation} size={props.size} />
    );
}
const HomeIcon = (props) => {
    return (
        <Icon width={'23.8344'} height={'22.5111'} path={'M9.10682 19.5993L14.7258 19.5993L14.7258 12.5462C14.7258 12.0899 14.431 11.7935 13.9748 11.7935L9.86932 11.7935C9.40507 11.7935 9.10682 12.0899 9.10682 12.5462ZM5.28495 20.8706L18.4996 20.8706C19.976 20.8706 20.8463 20.0181 20.8463 18.5788L20.8463 7.7579L18.933 6.44639L18.933 17.9938C18.933 18.6128 18.5965 18.9573 17.9953 18.9573L5.78924 18.9573C5.18006 18.9573 4.84354 18.6128 4.84354 17.9938L4.84354 6.4544L2.93027 7.7579L2.93027 18.5788C2.93027 20.0181 3.79882 20.8706 5.28495 20.8706ZM0 9.84501C0 10.3491 0.379294 10.7792 0.99804 10.7792C1.30136 10.7792 1.57167 10.6222 1.81015 10.4263L11.51 2.28817C11.7723 2.05594 12.0799 2.05594 12.3439 2.28817L22.0385 10.4263C22.2707 10.6222 22.541 10.7792 22.8443 10.7792C23.4053 10.7792 23.8344 10.4309 23.8344 9.86903C23.8344 9.53915 23.7068 9.28408 23.4596 9.07314L13.2953 0.529978C12.4601-0.176659 11.4018-0.176659 10.5586 0.529978L0.38281 9.0749C0.127538 9.28584 0 9.57294 0 9.84501ZM18.0875 5.11553L20.8463 7.4372L20.8463 2.72334C20.8463 2.28311 20.5658 2.00264 20.1256 2.00264L18.81 2.00264C18.3777 2.00264 18.0875 2.28311 18.0875 2.72334Z'} isActive={props.isActive} urlLocation={props.urlLocation} size={props.size} />
    );
};

const MyPackagesIcon = (props) => {
    return (
        <Icon width={"19.9709"} height={"21.4254"} path={"M10.701 21.4254C10.7957 21.4041 10.8824 21.3643 10.9789 21.3111L18.541 17.0611C19.4896 16.5295 19.9709 15.9688 19.9709 14.5738L19.9709 6.78536C19.9709 6.5293 19.9531 6.32305 19.9051 6.1293L10.701 11.3285ZM9.26992 21.4254L9.26992 11.3285L0.0658208 6.1293C0.0160158 6.32305 0 6.5293 0 6.78536L0 14.5738C0 15.9688 0.489258 16.5295 1.42988 17.0611L9 21.3111C9.08672 21.3643 9.1752 21.4041 9.26992 21.4254ZM9.98945 10.06L14.1383 7.73536L4.8252 2.47852L1.30273 4.45977C1.07207 4.58399 0.882226 4.70997 0.715429 4.867ZM15.6275 6.90763L19.2555 4.867C19.0984 4.70997 18.9086 4.58399 18.6779 4.45977L11.8273 0.609576C11.2193 0.266021 10.5973 0.0822324 9.99121 0.0822324C9.37539 0.0822324 8.75332 0.266021 8.14531 0.609576L6.27187 1.66231Z"} isActive={props.isActive} urlLocation={props.urlLocation} size={props.size} />
    );
};

const StoreIcon = (props) => {
    return (
        <Icon width={'19.9709'} height={'21.4254'} path={'M0 17.257C0 19.3488 1.0957 20.4285 3.20351 20.4285L14.6906 20.4285C16.5529 20.4285 17.6486 19.3408 17.6486 17.257L17.6486 7.16014C17.6486 5.07636 16.5449 3.98866 14.4451 3.98866L13.0461 3.98866C13.0025 1.80781 11.1346 0 8.82031 0C6.50605 0 4.6461 1.80781 4.59453 3.98866L3.20351 3.98866C1.0957 3.98866 0 5.06835 0 7.16014ZM1.91327 17.0963L1.91327 7.32088C1.91327 6.37029 2.40643 5.90193 3.31444 5.90193L14.3262 5.90193C15.2262 5.90193 15.7354 6.37029 15.7354 7.32088L15.7354 17.0963C15.7354 18.0451 15.2262 18.5152 14.5717 18.5152L3.31444 18.5152C2.40643 18.5152 1.91327 18.0451 1.91327 17.0963ZM6.44628 3.98866C6.48983 2.72265 7.48202 1.70409 8.82031 1.70409C10.1586 1.70409 11.1588 2.72265 11.1943 3.98866Z'} isActive={props.isActive} urlLocation={props.urlLocation} size={props.size} />
    );
};

const AILearningIcon = (props) => {
    return (
        <Icon width={'26.1654'} height={'22.066'} path={'M0 10.3258C0 13.9799 2.50996 16.4117 6.26171 16.4117C9.95663 16.4117 12.4355 14.224 12.4355 10.9428C12.4355 9.56796 11.958 8.46034 11.1398 7.7664C10.7469 7.4373 10.5119 7.32734 10.1385 7.32734C9.62421 7.32734 9.25898 7.65175 9.25898 8.11718C9.25898 8.64764 9.52637 8.76581 10.0512 9.24979C10.4385 9.62381 10.6553 10.1976 10.6553 10.9117C10.6553 13.1316 8.9166 14.6119 6.29277 14.6119C3.60058 14.6119 1.81132 12.8973 1.81132 10.316C1.81132 8.80331 2.59061 7.39159 3.8705 6.62069L2.95742 5.05937C1.12246 6.15918 0 8.16933 0 10.3258ZM2.63672 5.14296C2.63672 7.40858 4.21718 9.00702 6.67304 9.00702C7.15976 9.00702 7.57382 8.59472 7.57382 8.10624C7.57382 7.60976 7.15976 7.19746 6.67304 7.19746C5.29452 7.19746 4.44804 6.34374 4.44804 5.14296C4.44804 3.81952 5.53964 2.89042 7.01484 2.89042C7.75058 2.89042 8.52109 3.13612 9.22421 3.64628L10.2846 2.17011C9.2746 1.43379 8.12382 1.08086 7.02636 1.08086C4.57871 1.08086 2.63672 2.76523 2.63672 5.14296ZM7.91035 4.8371C7.89433 5.41698 8.28359 5.81151 8.80136 5.81151C9.30136 5.81151 9.67909 5.47558 9.70214 4.91601C9.76874 3.10976 11.0742 1.7998 12.909 1.7998C14.0111 1.7998 14.9809 2.38417 15.3707 3.24921C15.4717 3.42812 15.623 3.45194 15.8508 3.39433C16.159 3.31171 16.5098 3.2664 16.849 3.2664C18.5725 3.28417 20.1728 4.58398 20.1728 6.60898C20.1728 11.1328 13.7469 10.6045 13.7469 15.151C13.7469 17.3519 15.4627 18.7433 17.7486 18.7433C17.9496 18.7433 18.1684 18.7353 18.3836 18.7273C18.6521 20.4367 19.7568 22.0058 21.4516 22.0058C23.9211 22.0058 25.225 19.1109 25.225 16.0463C25.225 14.6863 25.1478 13.8016 25.0512 12.9586L23.2469 13.4578C23.3383 14.2742 23.4252 15.033 23.4252 16.025C23.4252 18.4349 22.5443 20.1945 21.4516 20.1945C20.3373 20.1945 19.8473 18.6851 19.8473 17.3891C19.8473 17.2369 19.7465 17.1299 19.5588 17.1379C19.3187 17.1379 18.9969 17.1379 18.7123 17.1379C16.8234 17.1379 15.5986 16.5281 15.5986 15.0935C15.5986 11.6652 21.9824 12.3439 21.9824 6.60898C21.9824 3.55195 19.7119 1.45508 17.0646 1.45508C16.8834 1.45508 16.6328 1.48262 16.3787 1.54043C15.5641 0.580664 14.2947 0 12.9187 0C10.0768 0 8.0082 1.99433 7.91035 4.8371ZM19.5125 14.5455C19.5125 15.0482 19.9098 15.4117 20.416 15.448C23.857 15.6769 26.1654 13.641 26.1654 10.374C26.1654 7.69296 24.2301 5.63672 21.3459 5.27793L21.0543 7.09706C23.0322 7.07011 24.3541 8.38436 24.3541 10.374C24.3541 12.5318 22.7885 13.8373 20.4301 13.6465C19.9238 13.6021 19.5125 14.0437 19.5125 14.5455ZM14.5615 15.6709C13.9766 15.8971 13.2887 16.0123 12.6346 16.0123C11.1301 16.0123 9.6033 15.4381 8.97283 14.5264L7.36464 15.7586C8.4287 16.9904 10.2701 17.8201 12.4369 17.8201C13.3045 17.8201 14.2557 17.6853 15.183 17.3971ZM11.2 8.87304L11.8117 10.5965C14.3746 10.125 15.5853 8.53807 15.566 6.14218C15.559 5.64745 15.1396 5.2414 14.6432 5.2414C14.1484 5.2414 13.7441 5.64745 13.7547 6.14218C13.7758 7.7455 13.0641 8.63573 11.2 8.87304Z'} isActive={props.isActive} urlLocation={props.urlLocation} size={props.size} />
    );
};

const HelpIcon = (props) => {
    return (
        <Icon width={'20.1767'} height={'20.1812'} path={'M10.0875 20.175C15.6141 20.175 20.1767 15.606 20.1767 10.0875C20.1767 4.56094 15.606 0 10.0795 0C4.56269 0 0 4.56094 0 10.0875C0 15.606 4.5707 20.175 10.0875 20.175ZM10.0875 18.1879C5.59237 18.1879 1.9951 14.5826 1.9951 10.0875C1.9951 5.59237 5.58437 1.9871 10.0795 1.9871C14.5746 1.9871 18.1897 5.59237 18.1897 10.0875C18.1897 14.5826 14.5826 18.1879 10.0875 18.1879Z M9.8666 12.0352C10.3988 12.0352 10.7473 11.7191 10.7719 11.3242C10.7736 11.2869 10.7754 11.2381 10.7789 11.2088C10.8053 10.7023 11.1441 10.3613 11.782 9.9455C12.7486 9.31699 13.3697 8.75761 13.3697 7.61913C13.3697 5.99628 11.9068 5.06464 10.1728 5.06464C8.49843 5.06464 7.36504 5.83379 7.06621 6.74804C7.00859 6.91308 6.97578 7.07812 6.97578 7.25468C6.97578 7.72578 7.34043 8.0164 7.73476 8.0164C8.08964 8.0164 8.33437 7.86366 8.52597 7.60995L8.6789 7.40546C9.01015 6.87597 9.47226 6.58788 10.0615 6.58788C10.8535 6.58788 11.3805 7.05702 11.3805 7.71835C11.3805 8.34023 10.9721 8.6414 10.1471 9.21601C9.45098 9.70078 8.94121 10.2025 8.94121 11.0893C8.94121 11.123 8.94121 11.1631 8.94121 11.1969C8.94121 11.7486 9.27539 12.0352 9.8666 12.0352ZM9.85234 15.0244C10.4785 15.0244 10.9932 14.5682 10.9932 13.9525C10.9932 13.3387 10.4865 12.8807 9.85234 12.8807C9.21816 12.8807 8.70625 13.3449 8.70625 13.9525C8.70625 14.5602 9.22617 15.0244 9.85234 15.0244Z'} isActive={props.isActive} urlLocation={props.urlLocation} size={props.size} />
    );
};

const OverlayIcon = (props) => {
    return (
        <Icon width={'20.2105'} height={'22.4531'} path={'M16.7143 13.249L10.1293 16.8359L3.57207 13.2115L1.18515 14.5941C0.355467 15.0742 0 15.4848 0 16.0982C0 16.718 0.355467 17.1285 1.18515 17.6103L8.78066 22.0105C9.2916 22.3068 9.68378 22.4531 10.1053 22.4531C10.5187 22.4531 10.9207 22.3068 11.4299 22.0105L19.0174 17.6103C19.8471 17.1285 20.2105 16.718 20.2105 16.0982C20.2105 15.4848 19.8471 15.0742 19.0174 14.5941Z M14.7633 9.78593L17.6889 11.4504C17.7359 11.4717 17.7617 11.4992 17.7617 11.5463C17.7617 11.5916 17.7359 11.6129 17.6889 11.6404L10.5016 15.7338C10.3541 15.8147 10.2314 15.86 10.1053 15.86C9.9791 15.86 9.85644 15.8147 9.70097 15.7338L2.51366 11.6404C2.47459 11.6129 2.44881 11.5916 2.44881 11.5463C2.44881 11.4992 2.47459 11.4717 2.51366 11.4504L5.65878 9.65527L3.8291 8.51016L1.18515 10.0342C0.355467 10.5223 0 10.9266 0 11.5463C0 12.166 0.355467 12.5685 1.18515 13.0504L8.78066 17.4586C9.2916 17.7549 9.68378 17.9012 10.1053 17.9012C10.5187 17.9012 10.9207 17.7549 11.4299 17.4586L19.0174 13.0504C19.8471 12.5685 20.2105 12.166 20.2105 11.5463C20.2105 10.9266 19.8471 10.5223 19.0174 10.0342L16.5793 8.6166ZM10.1053 13.0586C10.5187 13.0586 10.9207 12.9141 11.4299 12.616L19.0174 8.21581C19.8471 7.73573 20.2105 7.32343 20.2105 6.70371C20.2105 6.09199 19.8471 5.68145 19.0174 5.19961L11.4299 0.799416C10.9207 0.503128 10.5187 0.356839 10.1053 0.356839C9.68378 0.356839 9.2916 0.503128 8.78066 0.799416L1.18515 5.19961C0.355467 5.68145 0 6.09199 0 6.70371C0 7.32343 0.355467 7.73573 1.18515 8.21581L8.78066 12.616C9.2916 12.9141 9.68378 13.0586 10.1053 13.0586ZM10.1053 11.0272C9.9791 11.0272 9.85644 10.9818 9.70097 10.8992L2.51366 6.79961C2.47459 6.77832 2.44881 6.75078 2.44881 6.70371C2.44881 6.66465 2.47459 6.63711 2.51366 6.61582L9.70097 2.5162C9.85644 2.43358 9.9791 2.39003 10.1053 2.39003C10.2314 2.39003 10.3541 2.43358 10.5016 2.5162L17.6889 6.61582C17.7359 6.63711 17.7617 6.66465 17.7617 6.70371C17.7617 6.75078 17.7359 6.77832 17.6889 6.79961L10.5016 10.8992C10.3541 10.9818 10.2314 11.0272 10.1053 11.0272Z'} isActive={props.isActive} urlLocation={props.urlLocation} size={props.size} />
    );
};

const SoundIcon = (props) => {
    return (
        <Icon width={'22.6142'} height={'17.4789'} path={'M2.15644 12.892L4.93105 12.892C5.01015 12.892 5.08124 12.916 5.14609 12.9746L9.43613 16.8144C9.94355 17.2678 10.3348 17.4789 10.8475 17.4789C11.5603 17.4789 12.1074 16.9496 12.1074 16.2287L12.1074 1.30976C12.1074 0.588865 11.5603 0.00976562 10.8314 0.00976562C10.3258 0.00976562 9.98086 0.233398 9.43613 0.724022L5.14609 4.53008C5.07949 4.58692 5.01015 4.6127 4.93105 4.6127L2.15644 4.6127C0.724607 4.6127 0 5.36387 0 6.88007L0 10.6344C0 12.1488 0.732614 12.892 2.15644 12.892ZM2.31972 11.1727C1.99706 11.1727 1.84159 11.0154 1.84159 10.6928L1.84159 6.81991C1.84159 6.49101 1.99706 6.33378 2.31972 6.33378L5.37441 6.33378C5.63886 6.33378 5.83944 6.27968 6.06405 6.0746L9.97461 2.51502C10.0199 2.46795 10.0688 2.44217 10.1354 2.44217C10.2055 2.44217 10.2658 2.49276 10.2658 2.5824L10.2658 14.9C10.2658 14.9897 10.2055 15.0518 10.1354 15.0518C10.0848 15.0518 10.0279 15.0225 9.97461 14.9754L6.06405 11.4318C5.83944 11.233 5.63886 11.1727 5.37441 11.1727Z M15.4275 13.067C15.8306 13.3338 16.374 13.2443 16.6728 12.816C17.4599 11.7682 17.9267 10.2779 17.9267 8.73457C17.9267 7.19121 17.4599 5.70898 16.6728 4.64961C16.374 4.22481 15.8306 4.12559 15.4275 4.40215C14.9516 4.71426 14.8666 5.28867 15.2396 5.83495C15.7797 6.60214 16.0844 7.6457 16.0844 8.73457C16.0844 9.82343 15.7699 10.8572 15.2396 11.6342C14.8746 12.1867 14.9516 12.7469 15.4275 13.067Z M19.322 15.6773C19.7607 15.9566 20.3013 15.8494 20.6054 15.4062C21.8765 13.6101 22.6142 11.2064 22.6142 8.73457C22.6142 6.26269 21.8845 3.84297 20.6054 2.06114C20.3013 1.61973 19.7607 1.51251 19.322 1.7918C18.8623 2.08164 18.7967 2.65312 19.1344 3.15898C20.1742 4.67519 20.7736 6.67206 20.7736 8.73457C20.7736 10.7971 20.1582 12.7762 19.1344 14.3084C18.8047 14.8142 18.8623 15.3875 19.322 15.6773Z'} isActive={props.isActive} urlLocation={props.urlLocation} size={props.size} />
    );
};

const EffectsIcon = (props) => {
    return (
        <Icon width={'21.677'} height={'20.1711'} path={'M19.5902 19.6603C20.0619 20.1418 20.8705 20.1418 21.3279 19.6603C21.7933 19.1691 21.7933 18.3978 21.3279 17.9226L12.0461 8.5957C11.5762 8.12402 10.7676 8.12402 10.3084 8.5957C9.83496 9.08691 9.84472 9.86796 10.3084 10.3414ZM14.0596 12.9004L11.1314 9.966C10.9328 9.76737 10.8619 9.53339 11.0623 9.34277C11.2334 9.16542 11.4754 9.21679 11.6838 9.42519L14.6111 12.356Z M7.57382 19.9045C7.77421 19.9045 7.92226 19.7617 7.95155 19.548C8.2623 16.9195 8.38573 16.8371 11.0736 16.4162C11.3086 16.3754 11.4531 16.2549 11.4531 16.0385C11.4531 15.8318 11.3086 15.6935 11.1197 15.659C8.39823 15.1389 8.26054 15.1521 7.95155 12.5271C7.92226 12.3135 7.77421 12.1707 7.57382 12.1707C7.36367 12.1707 7.21738 12.3135 7.19433 12.5174C6.85781 15.1937 6.76816 15.2834 4.02968 15.659C3.83906 15.682 3.69277 15.8318 3.69277 16.0385C3.69277 16.2451 3.8373 16.3736 4.02793 16.4162C6.77343 16.9461 6.8498 16.9443 7.19433 19.5693C7.21738 19.7617 7.36718 19.9045 7.57382 19.9045ZM2.87363 11.2914C3.02968 11.2914 3.12539 11.1797 3.15292 11.0316C3.46562 9.13573 3.48769 9.03788 5.48222 8.70057C5.6373 8.66776 5.74726 8.57557 5.74726 8.42128C5.74726 8.26522 5.6373 8.16503 5.49101 8.14022C3.48417 7.78085 3.47792 7.68476 3.15292 5.80292C3.12363 5.65487 3.02968 5.54941 2.87363 5.54941C2.71757 5.54941 2.62187 5.65487 2.59258 5.80116C2.27988 7.70585 2.25957 7.80194 0.258006 8.14022C0.10996 8.16327 0 8.26522 0 8.42128C0 8.57557 0.108203 8.66776 0.256249 8.70057C2.25957 9.05018 2.26054 9.14979 2.59258 11.0351C2.62363 11.1797 2.71757 11.2914 2.87363 11.2914ZM8.25507 4.8955C8.38984 4.8955 8.46601 4.81132 8.4873 4.6828C8.81581 3.06581 8.79452 3.01952 10.4844 2.68398C10.6199 2.65917 10.7103 2.57851 10.7103 2.45175C10.7103 2.31523 10.6199 2.23457 10.4914 2.20976C8.78749 1.86191 8.79648 1.8209 8.4873 0.220702C8.46777 0.0921869 8.38984 0 8.25507 0C8.11855 0 8.04414 0.0921869 8.02109 0.218944C7.69082 1.83496 7.71914 1.89531 6.02051 2.20976C5.89199 2.22929 5.79805 2.31523 5.79805 2.45175C5.79805 2.57851 5.88848 2.65917 6.01699 2.68398C7.71914 3.03183 7.70664 3.0746 8.02109 4.68632C8.04062 4.81132 8.11855 4.8955 8.25507 4.8955ZM16.5887 8.36913C16.743 8.36913 16.8387 8.26718 16.8715 8.11913C17.2158 6.22675 17.2027 6.12538 19.1972 5.78007C19.3603 5.75527 19.464 5.65507 19.464 5.50077C19.464 5.34472 19.3603 5.25253 19.206 5.21972C17.1992 4.86835 17.1789 4.77402 16.8715 2.89043C16.8422 2.74062 16.743 2.63066 16.5887 2.63066C16.4326 2.63066 16.3387 2.74062 16.3076 2.88867C15.9773 4.7916 15.9764 4.90527 13.9748 5.21972C13.8267 5.24726 13.7133 5.34472 13.715 5.50077C13.7168 5.65507 13.8232 5.75527 13.973 5.78007C15.9764 6.13593 15.9949 6.23378 16.3076 8.12089C16.3351 8.26718 16.4326 8.36913 16.5887 8.36913Z'} isActive={props.isActive} urlLocation={props.urlLocation} size={props.size} />
    );
};

const LayeredRectangleIcon = (props) => {
    return (
        <Icon width={'24.673'} height={'20.273'} path={'M3.20351 15.6205L5.76952 15.6205L5.76952 13.7072L3.31444 13.7072C2.40643 13.7072 1.91327 13.2371 1.91327 12.2883L1.91327 3.34023C1.91327 2.39139 2.40643 1.91327 3.31444 1.91327L16.3258 1.91327C17.2258 1.91327 17.735 2.39139 17.735 3.34023L17.735 5.37948L19.6482 5.37948L19.6482 3.17148C19.6482 1.08769 18.5463 0 16.4447 0L3.20351 0C1.08769 0 0 1.08769 0 3.17148L0 12.449C0 14.5408 1.08769 15.6205 3.20351 15.6205Z M8.14022 20.2615L21.4678 20.2615C23.5693 20.2615 24.673 19.1756 24.673 17.09L24.673 7.81425C24.673 5.73046 23.5693 4.64277 21.4678 4.64277L8.14022 4.64277C6.02265 4.64277 4.93496 5.73046 4.93496 7.81425L4.93496 17.09C4.93496 19.1836 6.02265 20.2615 8.14022 20.2615ZM8.25116 18.3482C7.34139 18.3482 6.84822 17.8799 6.84822 16.931L6.84822 7.98299C6.84822 7.03241 7.34139 6.55604 8.25116 6.55604L21.3488 6.55604C22.2506 6.55604 22.7598 7.03241 22.7598 7.98299L22.7598 16.931C22.7598 17.8799 22.2506 18.3482 21.3488 18.3482Z'} isActive={props.isActive} urlLocation={props.urlLocation} size={props.size} />
    );
}

const RectangleIcon = (props) => {
    return (
        <Icon width={'23.1293'} height={'18.2316'} path={'M3.20351 18.2316L19.9258 18.2316C22.0416 18.2316 23.1293 17.1519 23.1293 15.0682L23.1293 3.17499C23.1293 1.08945 22.0416 0.00351548 19.9258 0.00351548L3.20351 0.00351548C1.0957 0.00351548 0 1.08945 0 3.17499L0 15.0682C0 17.1519 1.0957 18.2316 3.20351 18.2316ZM3.31444 16.3184C2.40643 16.3184 1.91327 15.8482 1.91327 14.8994L1.91327 3.34198C1.91327 2.39315 2.40643 1.91678 3.31444 1.91678L19.8148 1.91678C20.7149 1.91678 21.216 2.39315 21.216 3.34198L21.216 14.8994C21.216 15.8482 20.7149 16.3184 19.8148 16.3184Z'} isActive={props.isActive} urlLocation={props.urlLocation} size={props.size} />
    );
}

const AddRectangleIcon = (props) => {
    return (
        <Icon width={'30.1955'} height={'21.8195'} path={'M10.5279 20.0336L23.992 20.0336C26.1078 20.0336 27.1955 18.9459 27.1955 16.8621L27.1955 4.97695C27.1955 2.89141 26.1078 1.80547 23.992 1.80547L7.26973 1.80547C5.16192 1.80547 4.06622 2.8834 4.06622 4.97695L4.06622 10.4547C4.38086 10.4061 4.70078 10.376 5.01621 10.376C5.3414 10.376 5.66132 10.4061 5.97948 10.4582L5.97948 5.13593C5.97948 4.1871 6.47265 3.71874 7.38066 3.71874L23.8811 3.71874C24.7811 3.71874 25.2822 4.1871 25.2822 5.13593L25.2822 16.7014C25.2822 17.6502 24.7811 18.1203 23.8811 18.1203L11.2496 18.1203C11.135 18.8035 10.8832 19.4504 10.5279 20.0336Z M5.02597 21.8195C7.75195 21.8195 10.0519 19.5418 10.0519 16.7918C10.0519 14.0436 7.78574 11.7676 5.02597 11.7676C2.26621 11.7676 0 14.0436 0 16.7918C0 19.5578 2.26621 21.8195 5.02597 21.8195Z M5.02597 19.9781C4.62422 19.9781 4.36348 19.7156 4.36348 19.3174L4.36348 17.4578L2.50742 17.4578C2.11719 17.4578 1.84668 17.1953 1.84492 16.7936C1.84316 16.3936 2.11191 16.1311 2.50742 16.1311L4.36348 16.1311L4.36348 14.2865C4.36348 13.8865 4.62422 13.6178 5.02597 13.6143C5.42773 13.6125 5.68847 13.883 5.68847 14.2865L5.68847 16.1311L7.53828 16.1311C7.93828 16.1311 8.20703 16.3936 8.20703 16.7936C8.20703 17.1953 7.93828 17.4578 7.53828 17.4578L5.68847 17.4578L5.68847 19.3174C5.68847 19.7156 5.42773 19.9781 5.02597 19.9781Z'} isActive={props.isActive} urlLocation={props.urlLocation} size={props.size} />
    );
}

// Add new icons here in this format
// const NewIcon = (props) => {
//     return (
//         <Icon width={''} height={''} path={''} isActive={props.isActive} urlLocation={props.urlLocation} size={props.size} />
//         </Icon>
//     );
// };

// Sizes:
    // '' = scale 1
    // 'sm' = scale 0.8
    // 'xs' = scale 0.6
    // 'lg' = scale 1.2
    // 'xl' = scale 1.5
// Remember to add to export at the bottom as well

export {
    Icon,
    SceneIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    HomeIcon,
    MyPackagesIcon,
    StoreIcon,
    AILearningIcon,
    HelpIcon,
    OverlayIcon,
    SoundIcon,
    EffectsIcon,
    LayeredRectangleIcon,
    RectangleIcon,
    AddRectangleIcon,
    // NewIcon
};