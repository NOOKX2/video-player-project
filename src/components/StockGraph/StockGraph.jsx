export function StockGraph() {
  useEffect(() => {
    setInterval(() => {
      console.log("Fetch data");
    }, 1000);
  }, []);

  return (
    <div>
      <img alt="stock" src="200w.webp" />
    </div>
  );
}
