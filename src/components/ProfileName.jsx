export default function ProfileName({ name, profesion }) {
  return (
    <div className="space-y-2 text-center sm:text-left">
      <div className="space-y-0.5">
        <p className="text-lg font-semibold text-black">{name}</p>
        <p className="font-medium text-gray-500">{profesion}</p>
      </div>
    </div>
  );
}