import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeaderSearch } from '../tables/search-menu';
import { PrizeInfo } from '../../Types/Prizes';

export const columns: ColumnDef<PrizeInfo>[] = [
	{
		accessorKey: 'name',
		id: 'name',
		header: ({ column }) => (
			<DataTableColumnHeaderSearch column={column} title="Valor del Código" />
		),
	},
	{
		accessorKey: 'available',
		header: 'Disponible',
	},
	{
		accessorKey: 'taken',
		header: 'Entregados',
	},
	{
		header: 'Total',
		accessorKey: 'total',
	},
];
