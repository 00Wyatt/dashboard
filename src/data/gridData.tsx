import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { GridCellParams, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import theme from "../theme/theme";
import { getDaysInMonth } from "../utils";

type SparkLineData = number[];

function renderSparklineCell(params: GridCellParams<SparkLineData, any>) {
	const data = getDaysInMonth(11, 2024);
	const { value, colDef } = params;

	if (!value || value.length === 0) {
		return null;
	}

	return (
		<div style={{ display: "flex", alignItems: "center", height: "100%" }}>
			<SparkLineChart
				data={value}
				width={colDef.computedWidth || 100}
				height={32}
				plotType="bar"
				showHighlight
				showTooltip
				colors={[theme.palette.primary.main]}
				xAxis={{
					scaleType: "band",
					data,
				}}
			/>
		</div>
	);
}

function renderStatus(status: "Online" | "Offline") {
	const colors: { [index: string]: "success" | "default" } = {
		Online: "success",
		Offline: "default",
	};

	return <Chip label={status} color={colors[status]} size="small" />;
}

export function renderAvatar(
	params: GridCellParams<{ name: string; color: string }, any, any>
) {
	if (params.value == null) {
		return "";
	}

	return (
		<Avatar
			sx={{
				backgroundColor: params.value.color,
				width: "24px",
				height: "24px",
				fontSize: "0.85rem",
			}}>
			{params.value.name.toUpperCase().substring(0, 1)}
		</Avatar>
	);
}

export const columns: GridColDef[] = [
	{ field: "pageTitle", headerName: "Page Title", flex: 1.5, minWidth: 220 },
	{
		field: "status",
		headerName: "Status",
		flex: 1,
		minWidth: 80,
		renderCell: params => renderStatus(params.value as any),
	},
	{
		field: "users",
		headerName: "Users",
		flex: 1,
		minWidth: 80,
	},
	{
		field: "eventCount",
		headerName: "Event Count",
		flex: 1,
		minWidth: 80,
	},
	{
		field: "viewsPerUser",
		headerName: "Views per User",
		flex: 1,
		minWidth: 80,
	},
	{
		field: "conversions",
		headerName: "Daily Conversions",
		flex: 1,
		minWidth: 150,
		renderCell: renderSparklineCell,
	},
];

export const rows: GridRowsProp = [
	{
		id: 1,
		pageTitle: "Landing Page Overview",
		status: "Online",
		eventCount: 8345,
		users: 1124,
		viewsPerUser: 18.5,
		conversions: [
			157, 734, 1107, 1198, 1181, 1216, 1921, 2414, 3038, 3293, 3457,
			3922, 4357, 4814, 4646, 5424, 6212, 6141, 6731, 7068, 7581, 7378,
			7887, 8158, 8105, 8794, 9120, 9184, 8922, 8897,
		],
	},
	{
		id: 2,
		pageTitle: "Reports - Annual Overview",
		status: "Online",
		eventCount: 5653,
		users: 1722,
		viewsPerUser: 9.7,
		conversions: [
			159, 100, 818, 572, 1078, 1356, 1242, 1859, 2581, 3244, 4040, 3926,
			4648, 5100, 5881, 5998, 6697, 6916, 7009, 7204, 7102, 7643, 8064,
			8200, 8086, 8713, 8414, 8780, 8560, 9003,
		],
	},
	{
		id: 3,
		pageTitle: "Account - Subscription Plans",
		status: "Offline",
		eventCount: 3455,
		users: 1824,
		viewsPerUser: 15.2,
		conversions: [
			100, 100, 832, 1321, 2016, 2541, 2406, 2445, 2267, 2013, 2140, 2712,
			3415, 3420, 3562, 3483, 3459, 4133, 3893, 3890, 3676, 3474, 3713,
			4486, 4752, 5056, 5428, 5690, 6246, 6143,
		],
	},
	{
		id: 4,
		pageTitle: "User Profile Dashboard",
		status: "Online",
		eventCount: 1125,
		users: 1624,
		viewsPerUser: 4.5,
		conversions: [
			100, 100, 100, 100, 679, 968, 1496, 2175, 1963, 2567, 2923, 3386,
			3603, 4263, 4862, 4712, 5182, 5722, 6036, 5984, 5948, 6481, 6294,
			6737, 6447, 6152, 6773, 7100, 7386, 7243,
		],
	},
	{
		id: 5,
		pageTitle: "Product Insights - Accessories",
		status: "Offline",
		eventCount: 3653,
		users: 1422,
		viewsPerUser: 3.1,
		conversions: [
			136, 348, 664, 433, 249, 1044, 1676, 1561, 1652, 1557, 2197, 2492,
			2955, 3680, 3759, 3506, 3554, 4219, 4876, 4729, 5456, 5428, 5510,
			5888, 6483, 6287, 6450, 6578, 6416, 6778,
		],
	},
	{
		id: 6,
		pageTitle: "Customer Portal - Dashboard",
		status: "Online",
		eventCount: 1065,
		users: 1524,
		viewsPerUser: 7.2,
		conversions: [
			128, 100, 362, 780, 1077, 1828, 1998, 2142, 2339, 2784, 3080, 3360,
			3090, 2969, 2997, 3507, 3854, 4470, 5068, 5463, 6022, 5744, 6178,
			6938, 6817, 7212, 7867, 7834, 8031, 8747,
		],
	},
	{
		id: 7,
		pageTitle: "Support Center - Live Chat",
		status: "Online",
		eventCount: 7853,
		users: 1224,
		viewsPerUser: 6.5,
		conversions: [
			108, 374, 199, 100, 100, 192, 100, 100, 103, 426, 355, 126, 100,
			599, 1157, 1689, 1913, 2466, 2205, 2210, 2240, 2916, 2616, 2619,
			2308, 2833, 3361, 3233, 2871, 2949,
		],
	},
	{
		id: 8,
		pageTitle: "Checkout Process - Final Step",
		status: "Online",
		eventCount: 8563,
		users: 1824,
		viewsPerUser: 4.3,
		conversions: [
			188, 100, 731, 747, 822, 973, 1604, 2156, 2678, 2907, 3248, 3851,
			4399, 4688, 4310, 4370, 4584, 4767, 4884, 5115, 5112, 5000, 4695,
			4444, 4619, 4420, 4586, 5049, 5632, 6043,
		],
	},
	{
		id: 9,
		pageTitle: "Events - Upcoming Seminars",
		status: "Offline",
		eventCount: 4563,
		users: 1824,
		viewsPerUser: 2.7,
		conversions: [
			174, 267, 328, 874, 1505, 1593, 1582, 1952, 2422, 2948, 3436, 3391,
			3508, 3625, 3452, 3635, 3644, 3317, 3273, 3144, 3100, 3476, 4150,
			4835, 5581, 5742, 5858, 6312, 6264, 6247,
		],
	},
	{
		id: 10,
		pageTitle: "Analytics - User Behavior",
		status: "Online",
		eventCount: 9863,
		users: 1824,
		viewsPerUser: 5.1,
		conversions: [
			179, 287, 100, 100, 112, 135, 599, 481, 1179, 1618, 1858, 1820,
			1823, 2102, 2033, 2031, 2543, 2660, 2686, 2372, 2269, 2183, 2729,
			3207, 3193, 2975, 3499, 3166, 3912, 4056,
		],
	},
	{
		id: 11,
		pageTitle: "Settings - Notification Preferences",
		status: "Online",
		eventCount: 6563,
		users: 1424,
		viewsPerUser: 4.8,
		conversions: [
			165, 768, 866, 1480, 1283, 1707, 2212, 1920, 1883, 2050, 1790, 2585,
			2559, 3266, 3336, 3297, 3139, 3173, 3851, 3981, 3983, 4763, 5517,
			6258, 6972, 6684, 6849, 6708, 6795, 7304,
		],
	},
	{
		id: 12,
		pageTitle: "Promotions - Limited-Time Offers",
		status: "Online",
		eventCount: 1235,
		users: 1824,
		viewsPerUser: 3.5,
		conversions: [
			160, 370, 943, 868, 830, 1260, 1614, 1680, 1601, 2098, 2569, 2834,
			3404, 3859, 4147, 4293, 4914, 5528, 5587, 5757, 5740, 5967, 5844,
			5920, 5939, 5693, 5572, 5356, 5282, 5898,
		],
	},
	{
		id: 13,
		pageTitle: "Forum - Popular Discussions",
		status: "Offline",
		eventCount: 5863,
		users: 1324,
		viewsPerUser: 2.3,
		conversions: [
			107, 100, 464, 438, 935, 884, 1157, 1597, 2046, 2546, 2773, 2486,
			2819, 2951, 2895, 3100, 3343, 3323, 3918, 3866, 4033, 4214, 4009,
			4023, 3836, 3677, 3468, 3336, 3579, 4236,
		],
	},
	{
		id: 14,
		pageTitle: "Order Management - Shipment Status",
		status: "Online",
		eventCount: 7853,
		users: 1824,
		viewsPerUser: 3.2,
		conversions: [
			159, 100, 373, 183, 432, 264, 933, 784, 939, 1571, 1642, 2055, 2332,
			2760, 2805, 3569, 3834, 3565, 3598, 4172, 4526, 4942, 5340, 5361,
			5660, 5517, 5321, 5089, 5683, 5871,
		],
	},
	{
		id: 15,
		pageTitle: "Case Studies - Innovative Solutions",
		status: "Offline",
		eventCount: 9563,
		users: 1424,
		viewsPerUser: 2.5,
		conversions: [
			135, 839, 627, 936, 1456, 1629, 1354, 1496, 1298, 1230, 1867, 2475,
			2771, 2759, 3539, 3899, 3746, 4088, 4359, 4916, 5469, 6168, 5895,
			6074, 6379, 6581, 6621, 7241, 7398, 7239,
		],
	},
	{
		id: 16,
		pageTitle: "Training - Leadership Programs",
		status: "Online",
		eventCount: 1342,
		users: 1423,
		viewsPerUser: 7.8,
		conversions: [
			175, 212, 1005, 1624, 1602, 1600, 1539, 2284, 2398, 2493, 2695,
			2739, 2866, 3315, 3016, 2977, 3524, 3657, 3389, 3446, 3181, 3113,
			3876, 3886, 3624, 4013, 4233, 4840, 5188, 5287,
		],
	},
	{
		id: 17,
		pageTitle: "Documentation - User Manual",
		status: "Offline",
		eventCount: 4234,
		users: 1934,
		viewsPerUser: 5.2,
		conversions: [
			142, 703, 1247, 1545, 1269, 1188, 1748, 1674, 2055, 2294, 2855,
			3273, 3566, 4134, 4448, 4796, 4948, 5148, 4911, 5179, 5808, 6374,
			6113, 6411, 6815, 7343, 7797, 7762, 8390, 8284,
		],
	},
	{
		id: 18,
		pageTitle: "Integrations - API Connections",
		status: "Offline",
		eventCount: 8567,
		users: 1423,
		viewsPerUser: 6.3,
		conversions: [
			168, 938, 1081, 1732, 2441, 2321, 2118, 1898, 2544, 2902, 2987,
			3001, 3009, 3705, 3974, 4428, 4668, 4672, 4968, 5550, 5466, 5302,
			5404, 5816, 6560, 6579, 7128, 7741, 8098, 7847,
		],
	},
	{
		id: 19,
		pageTitle: "FAQs - Billing Questions",
		status: "Online",
		eventCount: 3456,
		users: 1923,
		viewsPerUser: 4.5,
		conversions: [
			199, 820, 909, 1181, 1811, 2486, 3147, 3240, 3906, 3785, 3806, 4573,
			4419, 5133, 5175, 4955, 4984, 5310, 5690, 5928, 6301, 6527, 7143,
			7436, 7585, 8219, 8765, 8610, 8421, 8705,
		],
	},
	{
		id: 20,
		pageTitle: "Product Comparisons - Wearables",
		status: "Online",
		eventCount: 6734,
		users: 1764,
		viewsPerUser: 3.9,
		conversions: [
			184, 861, 1501, 2144, 2786, 2514, 2784, 2563, 2311, 2418, 2790,
			3361, 4131, 4669, 5121, 5918, 5659, 5387, 5776, 6059, 6807, 6907,
			7346, 7471, 7510, 7629, 7807, 8449, 8894, 8653,
		],
	},
	{
		id: 21,
		pageTitle: "Feedback - Customer Satisfaction",
		status: "Offline",
		eventCount: 4567,
		users: 1934,
		viewsPerUser: 6.1,
		conversions: [
			114, 100, 350, 1139, 1695, 2200, 2036, 1893, 1957, 1822, 1960, 1697,
			2202, 2617, 3072, 3779, 3844, 4061, 4667, 4591, 5111, 4851, 5034,
			4986, 5747, 6076, 6342, 6095, 5985, 6716,
		],
	},
	{
		id: 22,
		pageTitle: "Blog Posts - Business Insights",
		status: "Online",
		eventCount: 7856,
		users: 1456,
		viewsPerUser: 5.7,
		conversions: [
			136, 851, 554, 697, 1157, 1057, 774, 912, 1079, 945, 1613, 2017,
			2642, 3405, 3711, 4433, 4864, 5022, 5153, 5226, 5856, 6198, 6709,
			7154, 7002, 6711, 7498, 7307, 7832, 8175,
		],
	},
	{
		id: 23,
		pageTitle: "Resources - Help Articles",
		status: "Offline",
		eventCount: 5678,
		users: 1345,
		viewsPerUser: 4.2,
		conversions: [
			193, 876, 1654, 1635, 1467, 1732, 1736, 2082, 2729, 3096, 3100,
			2950, 3439, 3177, 3376, 3378, 3594, 3882, 4641, 5235, 5673, 5558,
			5603, 5982, 6432, 7198, 7568, 7706, 8490, 8435,
		],
	},
	{
		id: 24,
		pageTitle: "Notifications - Important Updates",
		status: "Online",
		eventCount: 6789,
		users: 1768,
		viewsPerUser: 5.0,
		conversions: [
			151, 687, 930, 1582, 1726, 1734, 1882, 2658, 3125, 3213, 3696, 4108,
			4664, 5055, 5780, 6333, 6500, 7119, 6878, 7452, 7234, 7672, 8004,
			8367, 8914, 9605, 9662, 9375, 9293, 9795,
		],
	},
	{
		id: 25,
		pageTitle: "Tutorials - Quick Start Guides",
		status: "Online",
		eventCount: 4563,
		users: 1924,
		viewsPerUser: 6.4,
		conversions: [
			117, 210, 999, 1224, 1696, 1674, 1509, 1254, 1728, 2305, 2963, 3475,
			3813, 4111, 4097, 3812, 4383, 4461, 4459, 4685, 4834, 4554, 4431,
			4582, 4377, 4244, 4092, 4851, 4621, 4793,
		],
	},
	{
		id: 26,
		pageTitle: "Login Page - Secure Access",
		status: "Online",
		eventCount: 8564,
		users: 1424,
		viewsPerUser: 6.2,
		conversions: [
			150, 393, 327, 137, 731, 930, 1413, 1533, 1328, 1917, 2028, 2108,
			2813, 2607, 2910, 2617, 2375, 2244, 2466, 3076, 3257, 3846, 4514,
			4770, 4585, 5312, 5439, 6203, 6622, 7071,
		],
	},
	{
		id: 27,
		pageTitle: "Profiles - Key Stakeholders",
		status: "Offline",
		eventCount: 5634,
		users: 1342,
		viewsPerUser: 5.5,
		conversions: [
			140, 891, 1523, 1844, 1705, 2465, 2771, 3511, 3887, 3651, 4322,
			4339, 5091, 5195, 4938, 4668, 5068, 5842, 6048, 6702, 7072, 6829,
			6923, 6695, 6630, 6969, 6849, 6635, 7416, 7848,
		],
	},
	{
		id: 28,
		pageTitle: "News - Corporate Announcements",
		status: "Online",
		eventCount: 6745,
		users: 1765,
		viewsPerUser: 4.9,
		conversions: [
			190, 536, 725, 693, 755, 747, 1048, 1707, 2354, 2476, 2946, 2714,
			3135, 3373, 4139, 4408, 4331, 4651, 4529, 4890, 5562, 5500, 5866,
			6187, 6850, 6723, 6973, 7566, 7513, 7931,
		],
	},
	{
		id: 29,
		pageTitle: "Product Reviews - Trending Items",
		status: "Online",
		eventCount: 5678,
		users: 1345,
		viewsPerUser: 6.3,
		conversions: [
			165, 100, 100, 100, 420, 212, 684, 978, 1703, 1525, 1357, 1658,
			2206, 2900, 3459, 4055, 4219, 4935, 4940, 5002, 5001, 5665, 5936,
			6550, 6548, 6477, 6715, 7160, 7071, 7841,
		],
	},
	{
		id: 30,
		pageTitle: "Account - Contact Information",
		status: "Online",
		eventCount: 7890,
		users: 1456,
		viewsPerUser: 5.9,
		conversions: [
			197, 726, 567, 709, 716, 714, 1141, 989, 1387, 1584, 1929, 2644,
			2503, 3191, 3175, 3468, 3837, 4127, 4122, 3928, 3919, 4456, 4347,
			4249, 4394, 4117, 4772, 5316, 5389, 5993,
		],
	},
	{
		id: 31,
		pageTitle: "Shopping Cart - Your Selection",
		status: "Online",
		eventCount: 3456,
		users: 1923,
		viewsPerUser: 6.1,
		conversions: [
			153, 338, 997, 1558, 1955, 2625, 2857, 3095, 3550, 4347, 4781, 4598,
			4332, 4210, 4568, 4687, 5482, 5913, 6196, 6754, 6921, 7640, 7463,
			7792, 8322, 8034, 7748, 7973, 7754, 8489,
		],
	},
	{
		id: 32,
		pageTitle: "Article Listing - Lifestyle Blogs",
		status: "Online",
		eventCount: 5678,
		users: 1345,
		viewsPerUser: 4.7,
		conversions: [
			147, 100, 745, 990, 1641, 1928, 2200, 2355, 2727, 2577, 2965, 3655,
			3702, 4474, 4441, 4743, 4775, 5451, 5750, 6231, 6129, 6456, 6983,
			7589, 8002, 7816, 8103, 8432, 8197, 8431,
		],
	},
	{
		id: 33,
		pageTitle: "Dashboard - Performance Overview",
		status: "Offline",
		eventCount: 6789,
		users: 1068,
		viewsPerUser: 5.8,
		conversions: [
			193, 258, 708, 1364, 2125, 2136, 1875, 1820, 2108, 1971, 1725, 1616,
			2408, 2540, 2555, 2377, 2935, 3166, 3351, 3514, 4287, 4129, 4070,
			4269, 4298, 4384, 4094, 4606, 4979, 5377,
		],
	},
	{
		id: 34,
		pageTitle: "Reports - Quarterly Review",
		status: "Online",
		eventCount: 3724,
		users: 1934,
		viewsPerUser: 4.4,
		conversions: [
			122, 105, 277, 427, 226, 224, 413, 607, 987, 1060, 1028, 1750, 2261,
			2947, 3283, 3264, 3303, 3089, 3468, 3793, 3976, 4498, 4327, 5068,
			5339, 5665, 6125, 6763, 7121, 7916,
		],
	},
	{
		id: 35,
		pageTitle: "Payment Confirmation - Digital Wallet",
		status: "Online",
		eventCount: 4567,
		users: 1453,
		viewsPerUser: 5.4,
		conversions: [
			196, 100, 889, 720, 1393, 2050, 2632, 3098, 3137, 3185, 3557, 4191,
			4476, 5203, 5597, 5998, 6796, 6845, 6696, 7448, 7166, 7447, 7310,
			7668, 7472, 7685, 8251, 8826, 8697, 8581,
		],
	},
];
