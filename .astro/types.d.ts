declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"what-does-it-mean-to-dream-about-a-bike.md": {
	id: "what-does-it-mean-to-dream-about-a-bike.md";
  slug: "what-does-it-mean-to-dream-about-a-bike";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-a-car-accident.md": {
	id: "what-does-it-mean-to-dream-about-a-car-accident.md";
  slug: "what-does-it-mean-to-dream-about-a-car-accident";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-a-party.md": {
	id: "what-does-it-mean-to-dream-about-a-party.md";
  slug: "what-does-it-mean-to-dream-about-a-party";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-a-person.md": {
	id: "what-does-it-mean-to-dream-about-a-person.md";
  slug: "what-does-it-mean-to-dream-about-a-person";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-a-pool.md": {
	id: "what-does-it-mean-to-dream-about-a-pool.md";
  slug: "what-does-it-mean-to-dream-about-a-pool";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-a-ship.md": {
	id: "what-does-it-mean-to-dream-about-a-ship.md";
  slug: "what-does-it-mean-to-dream-about-a-ship";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-a-supermarket.md": {
	id: "what-does-it-mean-to-dream-about-a-supermarket.md";
  slug: "what-does-it-mean-to-dream-about-a-supermarket";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-a-tsunami.md": {
	id: "what-does-it-mean-to-dream-about-a-tsunami.md";
  slug: "what-does-it-mean-to-dream-about-a-tsunami";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-airplanes.md": {
	id: "what-does-it-mean-to-dream-about-airplanes.md";
  slug: "what-does-it-mean-to-dream-about-airplanes";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-aliens.md": {
	id: "what-does-it-mean-to-dream-about-aliens.md";
  slug: "what-does-it-mean-to-dream-about-aliens";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-an-earthquake.md": {
	id: "what-does-it-mean-to-dream-about-an-earthquake.md";
  slug: "what-does-it-mean-to-dream-about-an-earthquake";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-an-elevator.md": {
	id: "what-does-it-mean-to-dream-about-an-elevator.md";
  slug: "what-does-it-mean-to-dream-about-an-elevator";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-an-exam.md": {
	id: "what-does-it-mean-to-dream-about-an-exam.md";
  slug: "what-does-it-mean-to-dream-about-an-exam";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-an-illness.md": {
	id: "what-does-it-mean-to-dream-about-an-illness.md";
  slug: "what-does-it-mean-to-dream-about-an-illness";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-an-operation.md": {
	id: "what-does-it-mean-to-dream-about-an-operation.md";
  slug: "what-does-it-mean-to-dream-about-an-operation";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-angels.md": {
	id: "what-does-it-mean-to-dream-about-angels.md";
  slug: "what-does-it-mean-to-dream-about-angels";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-ants.md": {
	id: "what-does-it-mean-to-dream-about-ants.md";
  slug: "what-does-it-mean-to-dream-about-ants";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-bats.md": {
	id: "what-does-it-mean-to-dream-about-bats.md";
  slug: "what-does-it-mean-to-dream-about-bats";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-bears.md": {
	id: "what-does-it-mean-to-dream-about-bears.md";
  slug: "what-does-it-mean-to-dream-about-bears";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-bees.md": {
	id: "what-does-it-mean-to-dream-about-bees.md";
  slug: "what-does-it-mean-to-dream-about-bees";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-being-late.md": {
	id: "what-does-it-mean-to-dream-about-being-late.md";
  slug: "what-does-it-mean-to-dream-about-being-late";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-birds.md": {
	id: "what-does-it-mean-to-dream-about-birds.md";
  slug: "what-does-it-mean-to-dream-about-birds";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-books.md": {
	id: "what-does-it-mean-to-dream-about-books.md";
  slug: "what-does-it-mean-to-dream-about-books";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-bulls.md": {
	id: "what-does-it-mean-to-dream-about-bulls.md";
  slug: "what-does-it-mean-to-dream-about-bulls";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-buying-a-house.md": {
	id: "what-does-it-mean-to-dream-about-buying-a-house.md";
  slug: "what-does-it-mean-to-dream-about-buying-a-house";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-cars.md": {
	id: "what-does-it-mean-to-dream-about-cars.md";
  slug: "what-does-it-mean-to-dream-about-cars";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-cats.md": {
	id: "what-does-it-mean-to-dream-about-cats.md";
  slug: "what-does-it-mean-to-dream-about-cats";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-chickens.md": {
	id: "what-does-it-mean-to-dream-about-chickens.md";
  slug: "what-does-it-mean-to-dream-about-chickens";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-chocolate.md": {
	id: "what-does-it-mean-to-dream-about-chocolate.md";
  slug: "what-does-it-mean-to-dream-about-chocolate";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-clothes.md": {
	id: "what-does-it-mean-to-dream-about-clothes.md";
  slug: "what-does-it-mean-to-dream-about-clothes";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-cockroaches.md": {
	id: "what-does-it-mean-to-dream-about-cockroaches.md";
  slug: "what-does-it-mean-to-dream-about-cockroaches";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-coffee.md": {
	id: "what-does-it-mean-to-dream-about-coffee.md";
  slug: "what-does-it-mean-to-dream-about-coffee";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-crabs.md": {
	id: "what-does-it-mean-to-dream-about-crabs.md";
  slug: "what-does-it-mean-to-dream-about-crabs";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-crocodiles.md": {
	id: "what-does-it-mean-to-dream-about-crocodiles.md";
  slug: "what-does-it-mean-to-dream-about-crocodiles";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-crying.md": {
	id: "what-does-it-mean-to-dream-about-crying.md";
  slug: "what-does-it-mean-to-dream-about-crying";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-dancing.md": {
	id: "what-does-it-mean-to-dream-about-dancing.md";
  slug: "what-does-it-mean-to-dream-about-dancing";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-darkness.md": {
	id: "what-does-it-mean-to-dream-about-darkness.md";
  slug: "what-does-it-mean-to-dream-about-darkness";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-demons.md": {
	id: "what-does-it-mean-to-dream-about-demons.md";
  slug: "what-does-it-mean-to-dream-about-demons";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-dinosaurs.md": {
	id: "what-does-it-mean-to-dream-about-dinosaurs.md";
  slug: "what-does-it-mean-to-dream-about-dinosaurs";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-dogs.md": {
	id: "what-does-it-mean-to-dream-about-dogs.md";
  slug: "what-does-it-mean-to-dream-about-dogs";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-dolphins.md": {
	id: "what-does-it-mean-to-dream-about-dolphins.md";
  slug: "what-does-it-mean-to-dream-about-dolphins";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-doors.md": {
	id: "what-does-it-mean-to-dream-about-doors.md";
  slug: "what-does-it-mean-to-dream-about-doors";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-dragons.md": {
	id: "what-does-it-mean-to-dream-about-dragons.md";
  slug: "what-does-it-mean-to-dream-about-dragons";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-elephants.md": {
	id: "what-does-it-mean-to-dream-about-elephants.md";
  slug: "what-does-it-mean-to-dream-about-elephants";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-famous-people.md": {
	id: "what-does-it-mean-to-dream-about-famous-people.md";
  slug: "what-does-it-mean-to-dream-about-famous-people";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-fish.md": {
	id: "what-does-it-mean-to-dream-about-fish.md";
  slug: "what-does-it-mean-to-dream-about-fish";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-fleas.md": {
	id: "what-does-it-mean-to-dream-about-fleas.md";
  slug: "what-does-it-mean-to-dream-about-fleas";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-floods.md": {
	id: "what-does-it-mean-to-dream-about-floods.md";
  slug: "what-does-it-mean-to-dream-about-floods";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-flowers.md": {
	id: "what-does-it-mean-to-dream-about-flowers.md";
  slug: "what-does-it-mean-to-dream-about-flowers";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-fog.md": {
	id: "what-does-it-mean-to-dream-about-fog.md";
  slug: "what-does-it-mean-to-dream-about-fog";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-food.md": {
	id: "what-does-it-mean-to-dream-about-food.md";
  slug: "what-does-it-mean-to-dream-about-food";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-friends.md": {
	id: "what-does-it-mean-to-dream-about-friends.md";
  slug: "what-does-it-mean-to-dream-about-friends";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-frogs.md": {
	id: "what-does-it-mean-to-dream-about-frogs.md";
  slug: "what-does-it-mean-to-dream-about-frogs";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-fruits.md": {
	id: "what-does-it-mean-to-dream-about-fruits.md";
  slug: "what-does-it-mean-to-dream-about-fruits";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-garbage.md": {
	id: "what-does-it-mean-to-dream-about-garbage.md";
  slug: "what-does-it-mean-to-dream-about-garbage";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-getting-lost.md": {
	id: "what-does-it-mean-to-dream-about-getting-lost.md";
  slug: "what-does-it-mean-to-dream-about-getting-lost";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-ghosts.md": {
	id: "what-does-it-mean-to-dream-about-ghosts.md";
  slug: "what-does-it-mean-to-dream-about-ghosts";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-giving-birth.md": {
	id: "what-does-it-mean-to-dream-about-giving-birth.md";
  slug: "what-does-it-mean-to-dream-about-giving-birth";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-goats.md": {
	id: "what-does-it-mean-to-dream-about-goats.md";
  slug: "what-does-it-mean-to-dream-about-goats";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-gold.md": {
	id: "what-does-it-mean-to-dream-about-gold.md";
  slug: "what-does-it-mean-to-dream-about-gold";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-having-your-hair-cut.md": {
	id: "what-does-it-mean-to-dream-about-having-your-hair-cut.md";
  slug: "what-does-it-mean-to-dream-about-having-your-hair-cut";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-horses.md": {
	id: "what-does-it-mean-to-dream-about-horses.md";
  slug: "what-does-it-mean-to-dream-about-horses";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-infidelity.md": {
	id: "what-does-it-mean-to-dream-about-infidelity.md";
  slug: "what-does-it-mean-to-dream-about-infidelity";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-jellyfish.md": {
	id: "what-does-it-mean-to-dream-about-jellyfish.md";
  slug: "what-does-it-mean-to-dream-about-jellyfish";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-jewels.md": {
	id: "what-does-it-mean-to-dream-about-jewels.md";
  slug: "what-does-it-mean-to-dream-about-jewels";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-leaks.md": {
	id: "what-does-it-mean-to-dream-about-leaks.md";
  slug: "what-does-it-mean-to-dream-about-leaks";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-lice.md": {
	id: "what-does-it-mean-to-dream-about-lice.md";
  slug: "what-does-it-mean-to-dream-about-lice";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-lions.md": {
	id: "what-does-it-mean-to-dream-about-lions.md";
  slug: "what-does-it-mean-to-dream-about-lions";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-lizards.md": {
	id: "what-does-it-mean-to-dream-about-lizards.md";
  slug: "what-does-it-mean-to-dream-about-lizards";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-making-love.md": {
	id: "what-does-it-mean-to-dream-about-making-love.md";
  slug: "what-does-it-mean-to-dream-about-making-love";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-mice.md": {
	id: "what-does-it-mean-to-dream-about-mice.md";
  slug: "what-does-it-mean-to-dream-about-mice";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-money.md": {
	id: "what-does-it-mean-to-dream-about-money.md";
  slug: "what-does-it-mean-to-dream-about-money";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-monkeys.md": {
	id: "what-does-it-mean-to-dream-about-monkeys.md";
  slug: "what-does-it-mean-to-dream-about-monkeys";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-music.md": {
	id: "what-does-it-mean-to-dream-about-music.md";
  slug: "what-does-it-mean-to-dream-about-music";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-numbers.md": {
	id: "what-does-it-mean-to-dream-about-numbers.md";
  slug: "what-does-it-mean-to-dream-about-numbers";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-owls.md": {
	id: "what-does-it-mean-to-dream-about-owls.md";
  slug: "what-does-it-mean-to-dream-about-owls";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-packing-suitcases.md": {
	id: "what-does-it-mean-to-dream-about-packing-suitcases.md";
  slug: "what-does-it-mean-to-dream-about-packing-suitcases";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-pigs.md": {
	id: "what-does-it-mean-to-dream-about-pigs.md";
  slug: "what-does-it-mean-to-dream-about-pigs";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-plants.md": {
	id: "what-does-it-mean-to-dream-about-plants.md";
  slug: "what-does-it-mean-to-dream-about-plants";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-rabbits.md": {
	id: "what-does-it-mean-to-dream-about-rabbits.md";
  slug: "what-does-it-mean-to-dream-about-rabbits";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-rain.md": {
	id: "what-does-it-mean-to-dream-about-rain.md";
  slug: "what-does-it-mean-to-dream-about-rain";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-rats.md": {
	id: "what-does-it-mean-to-dream-about-rats.md";
  slug: "what-does-it-mean-to-dream-about-rats";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-relatives.md": {
	id: "what-does-it-mean-to-dream-about-relatives.md";
  slug: "what-does-it-mean-to-dream-about-relatives";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-roses.md": {
	id: "what-does-it-mean-to-dream-about-roses.md";
  slug: "what-does-it-mean-to-dream-about-roses";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-saving-someone.md": {
	id: "what-does-it-mean-to-dream-about-saving-someone.md";
  slug: "what-does-it-mean-to-dream-about-saving-someone";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-scorpions.md": {
	id: "what-does-it-mean-to-dream-about-scorpions.md";
  slug: "what-does-it-mean-to-dream-about-scorpions";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-sharks.md": {
	id: "what-does-it-mean-to-dream-about-sharks.md";
  slug: "what-does-it-mean-to-dream-about-sharks";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-sheep.md": {
	id: "what-does-it-mean-to-dream-about-sheep.md";
  slug: "what-does-it-mean-to-dream-about-sheep";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-singing.md": {
	id: "what-does-it-mean-to-dream-about-singing.md";
  slug: "what-does-it-mean-to-dream-about-singing";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-snakes.md": {
	id: "what-does-it-mean-to-dream-about-snakes.md";
  slug: "what-does-it-mean-to-dream-about-snakes";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-snow.md": {
	id: "what-does-it-mean-to-dream-about-snow.md";
  slug: "what-does-it-mean-to-dream-about-snow";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-someone-and-feel-it-real.md": {
	id: "what-does-it-mean-to-dream-about-someone-and-feel-it-real.md";
  slug: "what-does-it-mean-to-dream-about-someone-and-feel-it-real";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-someone-from-the-past.md": {
	id: "what-does-it-mean-to-dream-about-someone-from-the-past.md";
  slug: "what-does-it-mean-to-dream-about-someone-from-the-past";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-someone-who-does-not-talk-to-you.md": {
	id: "what-does-it-mean-to-dream-about-someone-who-does-not-talk-to-you.md";
  slug: "what-does-it-mean-to-dream-about-someone-who-does-not-talk-to-you";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-spiders.md": {
	id: "what-does-it-mean-to-dream-about-spiders.md";
  slug: "what-does-it-mean-to-dream-about-spiders";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-strangers.md": {
	id: "what-does-it-mean-to-dream-about-strangers.md";
  slug: "what-does-it-mean-to-dream-about-strangers";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-taking-a-shower.md": {
	id: "what-does-it-mean-to-dream-about-taking-a-shower.md";
  slug: "what-does-it-mean-to-dream-about-taking-a-shower";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-the-beach.md": {
	id: "what-does-it-mean-to-dream-about-the-beach.md";
  slug: "what-does-it-mean-to-dream-about-the-beach";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-the-person-you-like.md": {
	id: "what-does-it-mean-to-dream-about-the-person-you-like.md";
  slug: "what-does-it-mean-to-dream-about-the-person-you-like";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-the-sea.md": {
	id: "what-does-it-mean-to-dream-about-the-sea.md";
  slug: "what-does-it-mean-to-dream-about-the-sea";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-tigers.md": {
	id: "what-does-it-mean-to-dream-about-tigers.md";
  slug: "what-does-it-mean-to-dream-about-tigers";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-travel.md": {
	id: "what-does-it-mean-to-dream-about-travel.md";
  slug: "what-does-it-mean-to-dream-about-travel";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-trees.md": {
	id: "what-does-it-mean-to-dream-about-trees.md";
  slug: "what-does-it-mean-to-dream-about-trees";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-vampires.md": {
	id: "what-does-it-mean-to-dream-about-vampires.md";
  slug: "what-does-it-mean-to-dream-about-vampires";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-whales.md": {
	id: "what-does-it-mean-to-dream-about-whales.md";
  slug: "what-does-it-mean-to-dream-about-whales";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-winning-the-lottery.md": {
	id: "what-does-it-mean-to-dream-about-winning-the-lottery.md";
  slug: "what-does-it-mean-to-dream-about-winning-the-lottery";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-witches.md": {
	id: "what-does-it-mean-to-dream-about-witches.md";
  slug: "what-does-it-mean-to-dream-about-witches";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-wolves.md": {
	id: "what-does-it-mean-to-dream-about-wolves.md";
  slug: "what-does-it-mean-to-dream-about-wolves";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-work.md": {
	id: "what-does-it-mean-to-dream-about-work.md";
  slug: "what-does-it-mean-to-dream-about-work";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-worms.md": {
	id: "what-does-it-mean-to-dream-about-worms.md";
  slug: "what-does-it-mean-to-dream-about-worms";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-about-your-ex.md": {
	id: "what-does-it-mean-to-dream-about-your-ex.md";
  slug: "what-does-it-mean-to-dream-about-your-ex";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-that-a-dog-bites-you.md": {
	id: "what-does-it-mean-to-dream-that-a-dog-bites-you.md";
  slug: "what-does-it-mean-to-dream-that-a-dog-bites-you";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-that-you-are-getting-married.md": {
	id: "what-does-it-mean-to-dream-that-you-are-getting-married.md";
  slug: "what-does-it-mean-to-dream-that-you-are-getting-married";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-that-you-cant-open-your-eyes.md": {
	id: "what-does-it-mean-to-dream-that-you-cant-open-your-eyes.md";
  slug: "what-does-it-mean-to-dream-that-you-cant-open-your-eyes";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-that-you-fall-and-wake-up.md": {
	id: "what-does-it-mean-to-dream-that-you-fall-and-wake-up.md";
  slug: "what-does-it-mean-to-dream-that-you-fall-and-wake-up";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-that-you-fly.md": {
	id: "what-does-it-mean-to-dream-that-you-fly.md";
  slug: "what-does-it-mean-to-dream-that-you-fly";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-that-you-get-back-with-your-ex.md": {
	id: "what-does-it-mean-to-dream-that-you-get-back-with-your-ex.md";
  slug: "what-does-it-mean-to-dream-that-you-get-back-with-your-ex";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-that-you-run.md": {
	id: "what-does-it-mean-to-dream-that-you-run.md";
  slug: "what-does-it-mean-to-dream-that-you-run";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-that-your-hair-is-falling-out.md": {
	id: "what-does-it-mean-to-dream-that-your-hair-is-falling-out.md";
  slug: "what-does-it-mean-to-dream-that-your-hair-is-falling-out";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-that-your-partner-is-cheating.md": {
	id: "what-does-it-mean-to-dream-that-your-partner-is-cheating.md";
  slug: "what-does-it-mean-to-dream-that-your-partner-is-cheating";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-that-your-partner-leaves-you.md": {
	id: "what-does-it-mean-to-dream-that-your-partner-leaves-you.md";
  slug: "what-does-it-mean-to-dream-that-your-partner-leaves-you";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-does-it-mean-to-dream-that-your-teeth-fall-out.md": {
	id: "what-does-it-mean-to-dream-that-your-teeth-fall-out.md";
  slug: "what-does-it-mean-to-dream-that-your-teeth-fall-out";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
};
"posts": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">;
  render(): Render[".md"];
}>;

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
