function ErrorMessage({ children }) {
  return (
    <div className="lg:row-start-2 lg:col-start-2 lg:col-span-2 lg:row-span-2 m-auto  row-span-2 font-bold">
      {children}
    </div>
  );
}

export default ErrorMessage;
