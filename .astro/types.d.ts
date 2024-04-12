declare module 'astro:content' {
	interface Render {
		'.mdoc': Promise<{
			Content(props: Record<string, any>): import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

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
		"author": {
"chris-tham.md": {
	id: "chris-tham.md";
  slug: "chris-tham";
  body: string;
  collection: "author";
  data: InferEntrySchema<"author">
} & { render(): Render[".md"] };
"default.md": {
	id: "default.md";
  slug: "default";
  body: string;
  collection: "author";
  data: InferEntrySchema<"author">
} & { render(): Render[".md"] };
"matt-cone.md": {
	id: "matt-cone.md";
  slug: "matt-cone";
  body: string;
  collection: "author";
  data: InferEntrySchema<"author">
} & { render(): Render[".md"] };
};
"blog": {
"2000-01-01-template.md": {
	id: "2000-01-01-template.md";
  slug: "2000-01-01-template";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-08-09-mit-licence.md": {
	id: "2022-08-09-mit-licence.md";
  slug: "2022-08-09-mit-licence";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-08-10-markdown-cheat-sheet.md": {
	id: "2022-08-10-markdown-cheat-sheet.md";
  slug: "2022-08-10-markdown-cheat-sheet";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-08-19-sample-carousel.mdx": {
	id: "2022-08-19-sample-carousel.mdx";
  slug: "2022-08-19-sample-carousel";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"2022-08-20-mermaid-diagrams.md": {
	id: "2022-08-20-mermaid-diagrams.md";
  slug: "2022-08-20-mermaid-diagrams";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-08-21-sample-gallery-post-mdx.mdx": {
	id: "2022-08-21-sample-gallery-post-mdx.mdx";
  slug: "2022-08-21-sample-gallery-post-mdx";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"2022-08-22-sample-gallery-post-markdown.md": {
	id: "2022-08-22-sample-gallery-post-markdown.md";
  slug: "2022-08-22-sample-gallery-post-markdown";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-08-22-sample-images-post.md": {
	id: "2022-08-22-sample-images-post.md";
  slug: "2022-08-22-sample-images-post";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-08-23-sample-mdx-post.mdx": {
	id: "2022-08-23-sample-mdx-post.mdx";
  slug: "2022-08-23-sample-mdx-post";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"2022-08-24-math-equations.md": {
	id: "2022-08-24-math-equations.md";
  slug: "2022-08-24-math-equations";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-08-25-plantuml-diagrams.md": {
	id: "2022-08-25-plantuml-diagrams.md";
  slug: "2022-08-25-plantuml-diagrams";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2022-08-26-markmap-diagrams.md": {
	id: "2022-08-26-markmap-diagrams.md";
  slug: "2022-08-26-markmap-diagrams";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-06-10-sample-gallery-post-markdoc.mdoc": {
	id: "2023-06-10-sample-gallery-post-markdoc.mdoc";
  slug: "2023-06-10-sample-gallery-post-markdoc";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdoc"] };
"2023-06-11-how-to-use.md": {
	id: "2023-06-11-how-to-use.md";
  slug: "2023-06-11-how-to-use";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"2023-06-13-roadmap.md": {
	id: "2023-06-13-roadmap.md";
  slug: "2023-06-13-roadmap";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"category": {
"general.md": {
	id: "general.md";
  slug: "general";
  body: string;
  collection: "category";
  data: InferEntrySchema<"category">
} & { render(): Render[".md"] };
"information.md": {
	id: "information.md";
  slug: "information";
  body: string;
  collection: "category";
  data: InferEntrySchema<"category">
} & { render(): Render[".md"] };
"instructions.md": {
	id: "instructions.md";
  slug: "instructions";
  body: string;
  collection: "category";
  data: InferEntrySchema<"category">
} & { render(): Render[".md"] };
};
"doc": {
"introduction.md": {
	id: "introduction.md";
  slug: "introduction";
  body: string;
  collection: "doc";
  data: InferEntrySchema<"doc">
} & { render(): Render[".md"] };
"page-2.md": {
	id: "page-2.md";
  slug: "page-2";
  body: string;
  collection: "doc";
  data: InferEntrySchema<"doc">
} & { render(): Render[".md"] };
"page-3.md": {
	id: "page-3.md";
  slug: "page-3";
  body: string;
  collection: "doc";
  data: InferEntrySchema<"doc">
} & { render(): Render[".md"] };
"page-4.md": {
	id: "page-4.md";
  slug: "page-4";
  body: string;
  collection: "doc";
  data: InferEntrySchema<"doc">
} & { render(): Render[".md"] };
};
"page": {
"about.md": {
	id: "about.md";
  slug: "about";
  body: string;
  collection: "page";
  data: InferEntrySchema<"page">
} & { render(): Render[".md"] };
"privacy.md": {
	id: "privacy.md";
  slug: "privacy";
  body: string;
  collection: "page";
  data: InferEntrySchema<"page">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"social": {
"email": {
	id: "email";
  collection: "social";
  data: InferEntrySchema<"social">
};
"facebook": {
	id: "facebook";
  collection: "social";
  data: InferEntrySchema<"social">
};
"github": {
	id: "github";
  collection: "social";
  data: InferEntrySchema<"social">
};
"instagram": {
	id: "instagram";
  collection: "social";
  data: InferEntrySchema<"social">
};
"linkedin": {
	id: "linkedin";
  collection: "social";
  data: InferEntrySchema<"social">
};
"phone": {
	id: "phone";
  collection: "social";
  data: InferEntrySchema<"social">
};
"twitter": {
	id: "twitter";
  collection: "social";
  data: InferEntrySchema<"social">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
