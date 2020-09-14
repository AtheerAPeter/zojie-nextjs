const Navul = ({ classOpen }) => {
  return (
    <ul className={classOpen ? "sidebar" : "topBar"}>
      <li>
        <select name="" id="">
          <option value="Products">Products</option>
        </select>
      </li>
      <li>
        <select name="" id="">
          <option value="Use Cases">Use Cases</option>
        </select>
      </li>
      <li>
        <select name="" id="">
          <option value="Docs">Docs</option>
        </select>
      </li>
      <li>Pricing</li>
      <li>
        <select name="" id="">
          <option value="About us">About us</option>
        </select>
      </li>
    </ul>
  );
};

export default Navul;
