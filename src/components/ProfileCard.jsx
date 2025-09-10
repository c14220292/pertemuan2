import ProfileName from "./ProfileName";
import ProfilePicture from "./ProfilePicture";
import ProfileStats from "./ProfileStats";
import ProfileTheme from "./ProfileTheme";


export default function ProfileCard({ name, profesion }) {
  return (
    <div className="flex flex-col gap-2 p-8 m-4 bg-white w-2xl sm:flex-row sm:items-center sm:gap-6 sm:py-4">
      <ProfilePicture />
      <ProfileName name={name} profesion={profesion} />
    </div>
  );
}