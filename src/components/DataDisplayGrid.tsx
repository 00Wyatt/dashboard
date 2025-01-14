import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../data/gridData";

export default function DataDisplayGrid() {
	return (
		<DataGrid
			checkboxSelection
			rows={rows}
			columns={columns}
			getRowClassName={params =>
				params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
			}
			initialState={{
				pagination: { paginationModel: { pageSize: 10 } },
			}}
			pageSizeOptions={[10, 20, 50]}
			disableColumnResize
			density="standard"
			sx={theme => ({
				backgroundColor: theme.palette.background.paper,
				"& .MuiDataGrid-columnSeparator": {
					display: "none",
				},
				"& .MuiDataGrid-columnHeaders div.MuiDataGrid-row--borderBottom":
					{
						backgroundColor: "transparent",
					},
			})}
			slotProps={{
				basePopper: {
					sx: {
						"& .MuiList-root": {
							p: 0,
						},
						"& .MuiMenuItem-root": {
							margin: theme => theme.spacing(0.5, 0),
							padding: theme => theme.spacing(1, 2),
							borderRadius: 1,
						},
					},
				},
				filterPanel: {
					sx: {
						"& .MuiDataGrid-filterForm": {
							px: 0,
						},
					},
					filterFormProps: {
						columnInputProps: {
							variant: "outlined",
							size: "small",
							sx: { mt: "auto", mr: 1 },
						},
						operatorInputProps: {
							variant: "outlined",
							size: "small",
							sx: { mt: "auto", mr: 1 },
						},
						valueInputProps: {
							InputComponentProps: {
								variant: "outlined",
								size: "small",
							},
						},
					},
				},
				baseSelect: {
					MenuProps: {
						MenuListProps: {
							sx: {
								p: 0,
								"& .MuiMenuItem-root": {
									margin: theme => theme.spacing(0.5, 0),
									padding: theme => theme.spacing(1, 2),
									borderRadius: 1,
								},
							},
						},
					},
				},
			}}
		/>
	);
}
