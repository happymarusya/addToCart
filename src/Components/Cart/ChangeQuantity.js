const ChangeQuantity = ({quantity, setQuantity }) => {
    const addQuntity = () => {
        const newQuantity = quantity + 1;
        setQuantity (newQuantity)
    }
    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity (newQuantity);
    }

    return (
        <div>
            <button onClick={addQuntity}>+</button>
            <span>{quantity}</span>
            <button onClick={removeQuantity}>-</button>
        </div>
    )
}
export default ChangeQuantity;