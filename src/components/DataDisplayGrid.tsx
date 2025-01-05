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
				"& .MuiDataGrid-columnHeaders div.MuiDataGrid-row--borderBottom":
					{
						backgroundColor: "transparent",
					},
			})}
			slotProps={{
				filterPanel: {
					filterFormProps: {
						logicOperatorInputProps: {
							variant: "outlined",
							size: "small",
						},
						columnInputProps: {
							variant: "outlined",
							size: "small",
							sx: { mt: "auto" },
						},
						operatorInputProps: {
							variant: "outlined",
							size: "small",
							sx: { mt: "auto" },
						},
						valueInputProps: {
							InputComponentProps: {
								variant: "outlined",
								size: "small",
							},
						},
					},
				},
			}}
		/>
	);
}
