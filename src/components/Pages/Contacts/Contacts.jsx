import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import { columns, rows } from './data'
import Header from '../../Header'

const Contacts = () => {
	return (
		<Box>
			<Header
				title='CONTACTS'
				subTitle='List of Contacts for Future Reference'
			/>{' '}
			<Box sx={{ height: 650, width: '99%', mx: 'auto' }}>
				<DataGrid
					slots={{
						toolbar: GridToolbar,
					}}
					rows={rows}
					// @ts-ignore
					columns={columns}
				/>
			</Box>
		</Box>
	)
}

export default Contacts
