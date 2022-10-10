import React from "react";
// import weatherData from "../data/WeaterSample.json";

const TodayInfo = (props) => {
    console.log(props.weatherData, "Weather data in today info component");

    let weatherReport = undefined;
    if (props.weatherData !== undefined) {
        weatherReport = props.weatherData.DailyForecasts.filter((data) => {
            return data.Date.slice(0, 10) === props.date;
        })[0];
    }
    return (
        <div className='flex'>
            <div className='text-secondary-700 px-6'>
                <p className='text-2xl mb-3'>Today's Schedule</p>
                <div className='pb-4'>
                    <p className='underline cursor-pointer'>
                        Commisinor meet at 12:00 PM
                    </p>
                    <p className='underline cursor-pointer'>
                        Muncipal Commisionar meet at 4:00 PM
                    </p>
                </div>
            </div>
            {weatherReport && (
                <div className='text-secondary-700 px-6'>
                    <p className='text-2xl mb-3'>Weather Expectations</p>
                    <div className='pb-4'>
                        {weatherReport && weatherReport.Day && (
                            <p>{weatherReport.Day.IconPhrase}</p>
                        )}
                        {weatherReport &&
                            weatherReport.Day &&
                            weatherReport.Day.HasPrecipitation && (
                                <p>
                                    {weatherReport.Day.PrecipitationIntensity +
                                        weatherReport.Day.PrecipitationType}
                                </p>
                            )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TodayInfo;
