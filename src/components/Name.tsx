const Name = () => {
  let value = 'a'
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    value = e.target.value;
    console.log(value);
  }
  return (
    <div>
      <input
        id="Name"
        type="text"
        className="input-name"
        onChange={onChange}
      />
    </div>
  )
}

export default Name