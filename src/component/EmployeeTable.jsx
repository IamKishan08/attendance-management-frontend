import { useEffect, useState, useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable,MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton } from 'material-react-table';
import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  lighten,
} from '@mui/material';


import axios from './axiosInstance';
import Header from './Header';

const Example = () => {
  const [data, setData] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.29.232:8080/api/employees');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once after the initial render
  

  const columns = useMemo(
    () => [
      {
        accessorKey: 'employeeId',
        header: 'Employee Id',
        size: 150,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'category',
        header: 'Mill',
        size: 200,
      },
      {
        accessorKey: 'wage',
        header: 'Wage',
        size: 150,
      },
      {
        accessorKey: 'siderIncentive',
        header: 'Sider Incentive',
        size: 200,
      },
      {
        accessorKey: 'fitIncentive',
        header: 'Fit Incentive',
        size: 200,
      },
      {
        accessorKey: 'department',
        header: 'Department',
        size: 200,
      },
      {
        accessorKey: 'subDepartment',
        header: 'Sub Department',
        size: 200,
      },
      {
        accessorKey: 'joiningDate',
        header: 'Joining Date',
        size: 200,
      },
      {
        accessorKey: 'village',
        header: 'Village',
        size: 200,
      },
      {
        accessorKey: 'phoneNumber',
        header: 'Phone Number',
        size: 200,
      },
    ],
    [] // Empty dependency array for useMemo ensures the columns are memoized/stable
  );
  

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowSelection: true,
    enableRowActions: true,
    enableCellActions: true,
    createDisplayMode: 'modal',
    initialState: {
      showColumnFilters: false,
      showGlobalFilter: false,
      columnPinning: {
        left: ['mrt-row-expand', 'mrt-row-select'],
        right: ['mrt-row-actions'],
      },
    },
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    muiSearchTextFieldProps: {
      size: 'small',
      variant: 'outlined',
    },
    muiPaginationProps: {
      color: 'secondary',
      rowsPerPageOptions: [10, 20, 30],
      shape: 'rounded',
      variant: 'outlined',
    },
    renderRowActionMenuItems: ({ closeMenu }) => [
      <MenuItem
        key={0}
        onClick={() => {
          // View profile logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          
        </ListItemIcon>
        Edit
      </MenuItem>,
      <MenuItem
        key={1}
        onClick={() => {
          // Send email logic...
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
        
        </ListItemIcon>
        Delete
      </MenuItem>,
    ],
    renderTopToolbar: ({ table }) => {
      const handleDeactivate = async () => {
        const selectedRows = table.getSelectedRowModel();
       
        if (selectedRows && selectedRows.rows && selectedRows.rows.length > 0) {
           try {
             // Iterate over each selected row and send a delete request for each
             for (const row of selectedRows.rows) {
               const employeeId = row.getValue('employeeId'); // Extract the employeeId from the selected row
               const response = await axios.delete(`http://192.168.29.232:8080/api/employees/${employeeId}`);
               console.log(`Deleted employee with ID ${employeeId} successfully:`, response.data);
             }
       
             // If you want to update the UI after deletion, you can refetch the data or remove the deleted rows from the table
             // Example:
             //fetchData(); // Refetch data to update the table
           } catch (error) {
             console.error('Error deleting selected rows:', error);
           }
        } else {
           console.error('No rows selected.');
        }
       };
      


      return (
        <Box
          sx={(theme) => ({
            backgroundColor: lighten(theme.palette.background.default, 0.05),
            display: 'flex',
            gap: '0.5rem',
            p: '8px',
            justifyContent: 'space-between',
          })}
        >
          <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {/* import MRT sub-components */}
            <MRT_GlobalFilterTextField table={table} />
            <MRT_ToggleFiltersButton table={table} />
          </Box>
          <Box>
            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
              <Button
                color="error"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleDeactivate}
                variant="contained"
              >
                Delete
              </Button>
              
            </Box>
          </Box>
        </Box>
      );
    },
  });

  return(
    <div>
    <Header />
    <div className="p-1">
        <h1 align="center" className="text-2xl font-bold mb-4">Employee Master</h1>
    <MaterialReactTable table={table} />
    </div>
    </div>);
};

export default Example;
