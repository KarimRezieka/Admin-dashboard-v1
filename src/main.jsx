import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	createRoutesFromElements,
} from 'react-router-dom'
import App from './App'
import Dashboard from './components/Pages/Dashboard/Dashboard'
import Team from './components/Pages/Team/Team'
import Contacts from './components/Pages/Contacts/Contacts'
import Invoices from './components/Pages/Invoices/Invoices'
import Form from './components/Pages/Form/Form'
import Calendar from './components/Pages/Calender/Calender'
import Faq from './components/Pages/Faq/Faq'
import BarChart from './components/Pages/BarChart/BarChart'
import PieChart from './components/Pages/PieChart/PieChart'
import LineChart from './components/Pages/LineChart/LineChart'
import Geography from './components/Pages/Geography/Geography'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index element={<Dashboard />} />
			<Route path='team' element={<Team />} />

			<Route path='contacts' element={<Contacts />} />
			<Route path='invoices' element={<Invoices />} />
			<Route path='form' element={<Form />} />
			<Route path='calendar' element={<Calendar />} />
			<Route path='faq' element={<Faq />} />
			<Route path='bar' element={<BarChart />} />
			<Route path='pie' element={<PieChart />} />
			<Route path='line' element={<LineChart />} />
			<Route path='geography' element={<Geography />} />
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
