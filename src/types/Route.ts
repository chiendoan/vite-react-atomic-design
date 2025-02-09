import { ComponentType, FC, FunctionComponent } from 'react';

export type Route = {
	key: string;
	title: string;
	description?: string;
	path?: string;
	component?: FC<FunctionComponent<unknown>>;
	isEnabled: boolean;
	icon?: ComponentType;
	subRoutes?: Route[];
	appendDivider?: boolean;
	expanded?: boolean;
};
