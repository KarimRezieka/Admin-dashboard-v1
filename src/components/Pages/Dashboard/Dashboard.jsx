import { DownloadOutlined } from '@mui/icons-material'
import Row1 from './Rows/Row1'
import Row2 from './Rows/Row2'
import Row3 from './Rows/Row3'
import Button from '@mui/material/Button'
import { Box, Stack } from '@mui/material'
import Header from '../../Header'
export default function Dashboard() {
	return (
		<div className='dashboard'>
			<Stack direction={'row'} justifyContent={'space-between'}>
				<Header title='DASHBOARD' subTitle='Welcome to you dashboard' />
				<Box sx={{ textAlign: 'right', mb: 1 }}>
					<Button
						sx={{ padding: '6px 8px', textTransform: 'capitalize' }}
						variant='contained'
						color='primary'
					>
						<DownloadOutlined />
						Download Reports{' '}
					</Button>
				</Box>
			</Stack>
			<Row1 />
			<Row2 />
			<Row3 />
		</div>
	)
}
