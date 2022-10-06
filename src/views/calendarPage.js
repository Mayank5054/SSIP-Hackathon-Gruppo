import "./calendarPage.css";
import CalendarPart from "../components/CalendarPart";
import Nav from "../components/Nav";
// import BTN from "../components/BTN";

const CalendarPage = () => {
    return (
        <>
            <Nav showBg={true} isLoggedIn={true} />
            <section className='mx-auto relative mt-28 mb-10'>
                {/* <div className='flex justify-evenly items-center rounded-xl w-1/3 py-2 m-auto shadow-mine'>
                    <img
                        src='https://img.icons8.com/ios-filled/32/E2C8C8/fire-alarm-box.png'
                        alt='notification'
                    />
                    <p className='text-secondary-900'>
                        You have meeting in 3 minutes.
                    </p>
                    <BTN text={"Join Now"} />
                </div> */}
                <CalendarPart />
            </section>
        </>
    );
};
export default CalendarPage;
