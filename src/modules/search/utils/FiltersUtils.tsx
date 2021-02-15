export enum EFilterType {
	Genre = 'Genre',
	Condition = 'Condition',
	Distance = 'Distance'
}

export interface IFilter {
	id: number,
	name: string,
	type: EFilterType
};

export type TFilter = IFilter;

/**
export type TFilters = {
	[key in EFilterType]: TFilter[]
};
*/
