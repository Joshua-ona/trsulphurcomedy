export default function Donate() {
  return (
    <div className="section">
      <h2>Support the Ministry</h2>

      <form className="form">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Amount" type="number" />

        <select>
          <option>Mobile Money</option>
          <option>Card</option>
        </select>

        <button>Donate</button>
      </form>
    </div>
  );
}