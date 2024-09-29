// To parse this data:
//
//   import { Convert } from "./file";
//
//   const article = Convert.toArticle(json);

export interface Article {
	id?: number;
	date?: Date;
	date_gmt?: Date;
	guid?: GUID;
	modified?: Date;
	modified_gmt?: Date;
	slug?: string;
	status?: string;
	type?: string;
	link?: string;
	title?: GUID;
	content?: Content;
	excerpt?: Content;
	author?: number;
	featured_media?: number;
	comment_status?: string;
	ping_status?: string;
	sticky?: boolean;
	template?: string;
	format?: string;
	meta?: Meta;
	categories?: number[];
	tags?: number[];
	yoast_head?: string;
	yoast_head_json?: YoastHeadJSON;
	jetpack_featured_media_url?: string;
	_links?: Links;
}

export interface Links {
	self?: About[];
	collection?: About[];
	about?: About[];
	author?: AuthorElement[];
	replies?: AuthorElement[];
	'version-history'?: VersionHistory[];
	'predecessor-version'?: PredecessorVersion[];
	'wp:featuredmedia'?: AuthorElement[];
	'wp:attachment'?: About[];
	'wp:term'?: WpTerm[];
	curies?: Cury[];
}

export interface About {
	href?: string;
}

export interface AuthorElement {
	embeddable?: boolean;
	href?: string;
}

export interface Cury {
	name?: string;
	href?: string;
	templated?: boolean;
}

export interface PredecessorVersion {
	id?: number;
	href?: string;
}

export interface VersionHistory {
	count?: number;
	href?: string;
}

export interface WpTerm {
	taxonomy?: string;
	embeddable?: boolean;
	href?: string;
}

export interface Content {
	rendered?: string;
	protected?: boolean;
}

export interface GUID {
	rendered?: string;
}

export interface Meta {
	_eb_attr?: string;
}

export interface YoastHeadJSON {
	title?: string;
	robots?: Robots;
	canonical?: string;
	og_locale?: string;
	og_type?: string;
	og_title?: string;
	og_description?: string;
	og_url?: string;
	og_site_name?: string;
	article_publisher?: string;
	article_published_time?: Date;
	article_modified_time?: Date;
	og_image?: OgImage[];
	author?: string;
	twitter_card?: string;
	twitter_misc?: TwitterMisc;
	schema?: Schema;
	description?: string;
	twitter_title?: string;
	twitter_description?: string;
	twitter_image?: string;
}

export interface OgImage {
	width?: number;
	height?: number;
	url?: string;
	type?: string;
}

export interface Robots {
	index?: string;
	follow?: string;
	'max-snippet'?: string;
	'max-image-preview'?: string;
	'max-video-preview'?: string;
}

export interface Schema {
	'@context'?: string;
	'@graph'?: Graph[];
}

export interface Graph {
	'@type'?: string;
	'@id'?: string;
	isPartOf?: Breadcrumb;
	author?: GraphAuthor;
	headline?: string;
	datePublished?: Date;
	dateModified?: Date;
	mainEntityOfPage?: Breadcrumb;
	wordCount?: number;
	commentCount?: number;
	publisher?: Breadcrumb;
	articleSection?: string[];
	inLanguage?: InLanguage;
	potentialAction?: PotentialAction[];
	url?: string;
	name?: string;
	breadcrumb?: Breadcrumb;
	itemListElement?: ItemListElement[];
	description?: string;
	logo?: Image;
	image?: Image;
	sameAs?: string[];
	keywords?: string[];
}

export interface GraphAuthor {
	name?: string;
	'@id'?: string;
}

export interface Breadcrumb {
	'@id'?: string;
}

export interface Image {
	'@id'?: string;
	'@type'?: string;
	inLanguage?: InLanguage;
	url?: string;
	contentUrl?: string;
	caption?: string;
	width?: number;
	height?: number;
}

export enum InLanguage {
	EnUS = 'en-US'
}

export interface ItemListElement {
	'@type'?: string;
	position?: number;
	name?: string;
	item?: string;
}

export interface PotentialAction {
	'@type'?: Type;
	name?: string;
	target?: string[] | TargetClass;
	'query-input'?: string;
}

export enum Type {
	CommentAction = 'CommentAction',
	ReadAction = 'ReadAction',
	SearchAction = 'SearchAction'
}

export interface TargetClass {
	'@type'?: string;
	urlTemplate?: string;
}

export interface TwitterMisc {
	'Written by'?: string;
	'Est. reading time'?: string;
}

// Converts JSON strings to/from your types
export class Convert {
	public static toArticles(json: string): Article[] {
		return JSON.parse(json);
	}
	public static toArticle(json: string): Article {
		return JSON.parse(json);
	}
	public static articleToJson(value: Article[]): string {
		return JSON.stringify(value);
	}
}
