import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../redux/actions/walletActions";

function Wallet() {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet);

  return (
    <div>
      <h2>Wallet</h2>
      <div>
        <div>
          <button
            onClick={() => {
              dispatch(deposit());
            }}
          >
            deposit: $ 10
          </button>
          <button
            onClick={() => {
              dispatch(withdraw());
            }}
          >
            withdraw: $ 10
          </button>
        </div>
        <br />
        <div>
          <span className="font-bold">$ {wallet}</span>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
