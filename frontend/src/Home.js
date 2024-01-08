import TripCard from "./components/TripCard"
import { Button } from "@nextui-org/react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import img from "./images/tripImages/img.jpg"
const Home = () => {
<<<<<<< Updated upstream
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	// const images = [
	// 	"./images/tripImages/airplaneWing.jpg",
	// 	"./images/tripImages/DavidEm.jpg",
	// 	"./images/tripImages/Góry.jpg",
	// 	"./images/tripImages/GóryAless.jpg",
	// 	"GóryKalen.jpg",
	// 	"./images/tripImages/img.jpg",
	// 	"./images/tripImages/LakeAaron.jpg",
	// 	"./images/tripImages/TripBillard.jpg",
	// 	"./images/tripImages/VacationPoints.jpg",
	// ]
	useEffect(() => {
		setLoading(true)
		fetch(`http://localhost:8000/trip`, {
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(res => res.json())
			.then(data => {
				setData(data)
			})
		setLoading(false)
	}, [])
=======
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(url);
  // const images = [
  // 	"./images/tripImages/airplaneWing.jpg",
  // 	"./images/tripImages/DavidEm.jpg",
  // 	"./images/tripImages/Góry.jpg",
  // 	"./images/tripImages/GóryAless.jpg",
  // 	"GóryKalen.jpg",
  // 	"./images/tripImages/img.jpg",
  // 	"./images/tripImages/LakeAaron.jpg",
  // 	"./images/tripImages/TripBillard.jpg",
  // 	"./images/tripImages/VacationPoints.jpg",
  // ]

  useEffect(() => {
    setLoading(true);
    fetch(`${url}/trip/`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
    setLoading(false);
  }, []);
>>>>>>> Stashed changes

	return (
		<div className="flex items-center justify-center mt-10">
			<div className="flex flex-col items-center justify-between w-11/12  gap-y-5">
				<div className="flex flex-row justify-between w-5/6 items-center">
					<h1 className="text-xl font-bold">Moje Wyjazdy</h1>
					<Link to="/AddNewTrip">
						<Button color="secondary">+ Nowy Wyjazd</Button>
					</Link>
				</div>
				<div className="flex flex-wrap flex-row justify-center gap-x-5 gap-y-5 w-5/6">
					{data.map(item => (
						<TripCard
							// img={images[item.id]}
							trip_id={item.id}
							name={item.name}
							date_start={item.date_start}
							date_end={item.date_end}
							key={item.id}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
