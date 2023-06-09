import '../../Assets/Styles/Homepage/EditWindow.css';

const EditWindow = ({ packageItems, setPackageItems }) => {

    const RemoveButton = ({ index }) => {
        const handleRemove = () => {
            let newPackageItems = [...packageItems];
            newPackageItems[index].selected = false;
            setPackageItems(newPackageItems);
        };

        return (
            <div className='btn-toggle-component remove' onClick={handleRemove}>
                Remove
            </div>
        )
    }

    const AddButton = ({ index }) => {
        const handleAdd = () => {
            let newPackageItems = [...packageItems];
            newPackageItems[index].selected = true;
            setPackageItems(newPackageItems);
        };

        return (
            <div className='btn-toggle-component' onClick={handleAdd}>
                Add
            </div>
        );
    };

    const AddAllButton = () => {
        const handleAddAll = () => {
            let newPackageItems = [...packageItems];
            newPackageItems.forEach(item => item.selected = true);
            setPackageItems(newPackageItems);
        };

        return (
            <div className='btn-toggle-component' onClick={handleAddAll}>
                Add all
            </div>
        );
    };

    const RemoveAllButton = () => {
        const handleRemoveAll = () => {
            let newPackageItems = [...packageItems];
            newPackageItems.forEach(item => item.selected = false);
            setPackageItems(newPackageItems);
        };
        
        return (
            <div className='btn-toggle-component remove' onClick={handleRemoveAll}>
                Remove all
            </div>
        );
    };

    return (
        <div className='home-tools-edit-container'>
            {/* <p className='element-description'>Edit</p> */}
            <div className='package-components-container'>
                <div className='package-component-title'>
                    Package component
                    {packageItems.every(item => item.selected) ? <RemoveAllButton /> : <AddAllButton />}
                </div>
                <div className='package-component'>
                    Header
                    {packageItems[0].selected ? <RemoveButton index={0} /> : <AddButton index={0} />}
                </div>
                <div className='package-component'>
                    Icon frame
                    {packageItems[1].selected ? <RemoveButton index={1} /> : <AddButton index={1} />}
                </div>
                <div className='package-component'>
                    Sub counter
                    {packageItems[2].selected ? <RemoveButton index={2} /> : <AddButton index={2} />}
                </div>
                <div className='package-component'>
                    Social media
                    {packageItems[3].selected ? <RemoveButton index={3} /> : <AddButton index={3} />}
                </div>
            </div>
            <div className='edit-element-container'>
            </div>
        </div>
    );
}

export default EditWindow;