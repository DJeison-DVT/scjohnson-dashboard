import { ScrollArea } from './ui/scroll-area';
import { useLoaderData } from 'react-router-dom';

interface ChartEmbedProps {
	chartLink: string;
}

const ChartEmbed: React.FC<ChartEmbedProps> = ({ chartLink }) => {
	return (
		<iframe
			style={{
				background: '#FFFFFF',
				border: 'none',
				borderRadius: '2px',
				boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
			}}
			className="h-[540px] w-full"
			src={chartLink}
			title="MongoDB Atlas Chart"
		/>
	);
};

export default function Dashboard() {
	const { role } = useLoaderData() as { role: string }
	return (
		<div className="flex-1 w-full flex flex-col overflow-hidden bg-background">
			<ScrollArea className="flex-1 flex flex-col p-4">
				<div className="grid grid-cols-2 gap-4 flex-1">
					<div className="grid grid-cols-3 gap-4 col-span-2">
						<ChartEmbed chartLink="https://charts.mongodb.com/charts-kleenex-promo-qiyrdzy/embed/charts?id=bca4c9d6-230c-4559-8a73-cfcef5b0ca15&maxDataAge=3600&theme=light&autoRefresh=true" />
						<ChartEmbed chartLink="https://charts.mongodb.com/charts-kleenex-promo-qiyrdzy/embed/charts?id=b8031e06-bfac-45d0-82f5-3445eacc5818&maxDataAge=3600&theme=light&autoRefresh=true" />
						<ChartEmbed chartLink="https://charts.mongodb.com/charts-kleenex-promo-qiyrdzy/embed/charts?id=00646a3f-293b-4c93-96d4-5924599b4529&maxDataAge=3600&theme=light&autoRefresh=true" />
					</div>
					<div className="w-full h-full col-span-2">
						<ChartEmbed chartLink="https://charts.mongodb.com/charts-kleenex-promo-qiyrdzy/embed/charts?id=d89d24d0-2b9c-4392-b45f-cde3d0bdb802&maxDataAge=3600&theme=light&autoRefresh=true" />
					</div>
					{role !== 'viewer' && (
						<>
							<ChartEmbed chartLink="https://charts.mongodb.com/charts-kleenex-promo-qiyrdzy/embed/charts?id=c3f037b5-2edb-4804-919d-a61c64017f20&maxDataAge=3600&theme=light&autoRefresh=true" />
							<ChartEmbed chartLink="https://charts.mongodb.com/charts-kleenex-promo-qiyrdzy/embed/charts?id=b10c4544-3efc-413c-85eb-1adde5fcccd8&maxDataAge=3600&theme=light&autoRefresh=true" />
						</>
					)}
				</div>
			</ScrollArea>
		</div>
	);
}
