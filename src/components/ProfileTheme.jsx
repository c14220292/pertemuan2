import ProfileCard from "./ProfileCard";

export default function ProfileTheme() {
    const list = [
        {
            name: "Adi",
            profesion: "Web Developer"
        },
        {
            name: "Budi",
            profesion: "Designer"
        },
        {
            name: "Caca",
            profesion: "Marketing"
        },
    ];

    const cards = list.map((item, index) => {
        return <ProfileCard key={index} name={item.name} profesion={item.profesion} />
    });

    return (
        <>
            {cards}
        </>
    );
}