export const DemoNormalCard = ({ expand }) => (
  <div className="relative bg-slate-800 w-64 h-96 m-2 p-3 flex justify-center items-center rounded-lg">
    <div className="absolute top-2 right-3 text-white" onClick={expand}>
      Expand
    </div>
    <div className="text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </div>
  </div>
);
