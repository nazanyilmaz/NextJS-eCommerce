const WarningText = ({ text }: { text: string }) => {
  return (
    <div className=" h-screen text-center mt-10 ml-40 text-slate-600 font-extrabold">
      {text}
    </div>
  );
};

export default WarningText;
