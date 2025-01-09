function PriceExtra() {
  return (
    <div className="text-accent-500">
      <h3 className="text-accent-800 text-lg text-center mt-4 mb-2">
        Cost of Extras
      </h3>
      <ul className="border-2 border-accent-700 rounded-2xl p-4 m-2">
        <li className="flex justify-between m-3  text-accent-500">
          <p>3D nails designs</p>
          <span className="text-accent-700 font-bold"> £3 per finger</span>
        </li>
        <li className="flex justify-between m-3  text-accent-500">
          <p>Big nails decor</p>
          <span className="text-accent-700 font-bold"> £0.50 per gem</span>
        </li>
        <li className="flex justify-between m-3  text-accent-500">
          <p>Small gems</p>
          <span className="text-accent-700 font-bold"> £1 per 10 gems</span>
        </li>
      </ul>
    </div>
  );
}

export default PriceExtra;
