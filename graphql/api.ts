import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Class = Node & {
  __typename?: 'Class';
  assessments: Array<Grades>;
  code?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Class>;
  frequencies: Array<Frequency>;
  /** List of Class versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  subscribers: Array<Subscriber>;
  teacher?: Maybe<TurmaTeacher>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ClassAssessmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<GradesOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GradesWhereInput>;
};


export type ClassCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ClassDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ClassFrequenciesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<FrequencyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FrequencyWhereInput>;
};


export type ClassHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ClassPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ClassScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ClassSubscribersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SubscriberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriberWhereInput>;
};


export type ClassTeacherArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ClassUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ClassConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ClassWhereUniqueInput;
};

/** A connection to a list of items. */
export type ClassConnection = {
  __typename?: 'ClassConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ClassEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ClassCreateInput = {
  assessments?: InputMaybe<GradesCreateManyInlineInput>;
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  frequencies?: InputMaybe<FrequencyCreateManyInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  subscribers?: InputMaybe<SubscriberCreateManyInlineInput>;
  teacher?: InputMaybe<TurmaTeacherCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ClassCreateManyInlineInput = {
  /** Connect multiple existing Class documents */
  connect?: InputMaybe<Array<ClassWhereUniqueInput>>;
  /** Create and connect multiple existing Class documents */
  create?: InputMaybe<Array<ClassCreateInput>>;
};

export type ClassCreateOneInlineInput = {
  /** Connect one existing Class document */
  connect?: InputMaybe<ClassWhereUniqueInput>;
  /** Create and connect one Class document */
  create?: InputMaybe<ClassCreateInput>;
};

/** An edge in a connection. */
export type ClassEdge = {
  __typename?: 'ClassEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Class;
};

/** Identifies documents */
export type ClassManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ClassWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ClassWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ClassWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  assessments_every?: InputMaybe<GradesWhereInput>;
  assessments_none?: InputMaybe<GradesWhereInput>;
  assessments_some?: InputMaybe<GradesWhereInput>;
  code?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  code_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ClassWhereStageInput>;
  documentInStages_none?: InputMaybe<ClassWhereStageInput>;
  documentInStages_some?: InputMaybe<ClassWhereStageInput>;
  frequencies_every?: InputMaybe<FrequencyWhereInput>;
  frequencies_none?: InputMaybe<FrequencyWhereInput>;
  frequencies_some?: InputMaybe<FrequencyWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subscribers_every?: InputMaybe<SubscriberWhereInput>;
  subscribers_none?: InputMaybe<SubscriberWhereInput>;
  subscribers_some?: InputMaybe<SubscriberWhereInput>;
  /** All values in which the union is connected to the given models */
  teacher?: InputMaybe<TurmaTeacherWhereInput>;
  /** All values in which the union is empty */
  teacher_empty?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ClassOrderByInput {
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ClassUpdateInput = {
  assessments?: InputMaybe<GradesUpdateManyInlineInput>;
  code?: InputMaybe<Scalars['String']>;
  frequencies?: InputMaybe<FrequencyUpdateManyInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  subscribers?: InputMaybe<SubscriberUpdateManyInlineInput>;
  teacher?: InputMaybe<TurmaTeacherUpdateOneInlineInput>;
};

export type ClassUpdateManyInlineInput = {
  /** Connect multiple existing Class documents */
  connect?: InputMaybe<Array<ClassConnectInput>>;
  /** Create and connect multiple Class documents */
  create?: InputMaybe<Array<ClassCreateInput>>;
  /** Delete multiple Class documents */
  delete?: InputMaybe<Array<ClassWhereUniqueInput>>;
  /** Disconnect multiple Class documents */
  disconnect?: InputMaybe<Array<ClassWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Class documents */
  set?: InputMaybe<Array<ClassWhereUniqueInput>>;
  /** Update multiple Class documents */
  update?: InputMaybe<Array<ClassUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Class documents */
  upsert?: InputMaybe<Array<ClassUpsertWithNestedWhereUniqueInput>>;
};

export type ClassUpdateManyInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ClassUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ClassUpdateManyInput;
  /** Document search */
  where: ClassWhereInput;
};

export type ClassUpdateOneInlineInput = {
  /** Connect existing Class document */
  connect?: InputMaybe<ClassWhereUniqueInput>;
  /** Create and connect one Class document */
  create?: InputMaybe<ClassCreateInput>;
  /** Delete currently connected Class document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Class document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Class document */
  update?: InputMaybe<ClassUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Class document */
  upsert?: InputMaybe<ClassUpsertWithNestedWhereUniqueInput>;
};

export type ClassUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ClassUpdateInput;
  /** Unique document search */
  where: ClassWhereUniqueInput;
};

export type ClassUpsertInput = {
  /** Create document if it didn't exist */
  create: ClassCreateInput;
  /** Update document if it exists */
  update: ClassUpdateInput;
};

export type ClassUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ClassUpsertInput;
  /** Unique document search */
  where: ClassWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ClassWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ClassWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ClassWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ClassWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ClassWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  assessments_every?: InputMaybe<GradesWhereInput>;
  assessments_none?: InputMaybe<GradesWhereInput>;
  assessments_some?: InputMaybe<GradesWhereInput>;
  code?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  code_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ClassWhereStageInput>;
  documentInStages_none?: InputMaybe<ClassWhereStageInput>;
  documentInStages_some?: InputMaybe<ClassWhereStageInput>;
  frequencies_every?: InputMaybe<FrequencyWhereInput>;
  frequencies_none?: InputMaybe<FrequencyWhereInput>;
  frequencies_some?: InputMaybe<FrequencyWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subscribers_every?: InputMaybe<SubscriberWhereInput>;
  subscribers_none?: InputMaybe<SubscriberWhereInput>;
  subscribers_some?: InputMaybe<SubscriberWhereInput>;
  /** All values in which the union is connected to the given models */
  teacher?: InputMaybe<TurmaTeacherWhereInput>;
  /** All values in which the union is empty */
  teacher_empty?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ClassWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ClassWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ClassWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ClassWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ClassWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Class record uniquely */
export type ClassWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Finance = Node & {
  __typename?: 'Finance';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Finance>;
  /** List of Finance versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  month?: Maybe<Scalars['String']>;
  payment?: Maybe<Scalars['Boolean']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  subscriber?: Maybe<Subscriber>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  value?: Maybe<Scalars['Float']>;
};


export type FinanceCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FinanceDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type FinanceHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type FinancePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FinanceScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type FinanceSubscriberArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FinanceUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type FinanceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FinanceWhereUniqueInput;
};

/** A connection to a list of items. */
export type FinanceConnection = {
  __typename?: 'FinanceConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FinanceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FinanceCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  month?: InputMaybe<Scalars['String']>;
  payment?: InputMaybe<Scalars['Boolean']>;
  subscriber?: InputMaybe<SubscriberCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FinanceCreateManyInlineInput = {
  /** Connect multiple existing Finance documents */
  connect?: InputMaybe<Array<FinanceWhereUniqueInput>>;
  /** Create and connect multiple existing Finance documents */
  create?: InputMaybe<Array<FinanceCreateInput>>;
};

export type FinanceCreateOneInlineInput = {
  /** Connect one existing Finance document */
  connect?: InputMaybe<FinanceWhereUniqueInput>;
  /** Create and connect one Finance document */
  create?: InputMaybe<FinanceCreateInput>;
};

/** An edge in a connection. */
export type FinanceEdge = {
  __typename?: 'FinanceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Finance;
};

/** Identifies documents */
export type FinanceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FinanceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FinanceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FinanceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FinanceWhereStageInput>;
  documentInStages_none?: InputMaybe<FinanceWhereStageInput>;
  documentInStages_some?: InputMaybe<FinanceWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  month?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  month_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  month_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  month_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  month_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  month_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  month_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  month_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  month_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  month_starts_with?: InputMaybe<Scalars['String']>;
  payment?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  payment_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subscriber?: InputMaybe<SubscriberWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  value_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  value_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  value_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  value_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  value_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum FinanceOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MonthAsc = 'month_ASC',
  MonthDesc = 'month_DESC',
  PaymentAsc = 'payment_ASC',
  PaymentDesc = 'payment_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type FinanceUpdateInput = {
  month?: InputMaybe<Scalars['String']>;
  payment?: InputMaybe<Scalars['Boolean']>;
  subscriber?: InputMaybe<SubscriberUpdateOneInlineInput>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FinanceUpdateManyInlineInput = {
  /** Connect multiple existing Finance documents */
  connect?: InputMaybe<Array<FinanceConnectInput>>;
  /** Create and connect multiple Finance documents */
  create?: InputMaybe<Array<FinanceCreateInput>>;
  /** Delete multiple Finance documents */
  delete?: InputMaybe<Array<FinanceWhereUniqueInput>>;
  /** Disconnect multiple Finance documents */
  disconnect?: InputMaybe<Array<FinanceWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Finance documents */
  set?: InputMaybe<Array<FinanceWhereUniqueInput>>;
  /** Update multiple Finance documents */
  update?: InputMaybe<Array<FinanceUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Finance documents */
  upsert?: InputMaybe<Array<FinanceUpsertWithNestedWhereUniqueInput>>;
};

export type FinanceUpdateManyInput = {
  month?: InputMaybe<Scalars['String']>;
  payment?: InputMaybe<Scalars['Boolean']>;
  value?: InputMaybe<Scalars['Float']>;
};

export type FinanceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FinanceUpdateManyInput;
  /** Document search */
  where: FinanceWhereInput;
};

export type FinanceUpdateOneInlineInput = {
  /** Connect existing Finance document */
  connect?: InputMaybe<FinanceWhereUniqueInput>;
  /** Create and connect one Finance document */
  create?: InputMaybe<FinanceCreateInput>;
  /** Delete currently connected Finance document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Finance document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Finance document */
  update?: InputMaybe<FinanceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Finance document */
  upsert?: InputMaybe<FinanceUpsertWithNestedWhereUniqueInput>;
};

export type FinanceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FinanceUpdateInput;
  /** Unique document search */
  where: FinanceWhereUniqueInput;
};

export type FinanceUpsertInput = {
  /** Create document if it didn't exist */
  create: FinanceCreateInput;
  /** Update document if it exists */
  update: FinanceUpdateInput;
};

export type FinanceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FinanceUpsertInput;
  /** Unique document search */
  where: FinanceWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type FinanceWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type FinanceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FinanceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FinanceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FinanceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FinanceWhereStageInput>;
  documentInStages_none?: InputMaybe<FinanceWhereStageInput>;
  documentInStages_some?: InputMaybe<FinanceWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  month?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  month_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  month_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  month_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  month_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  month_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  month_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  month_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  month_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  month_starts_with?: InputMaybe<Scalars['String']>;
  payment?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  payment_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subscriber?: InputMaybe<SubscriberWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  value_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  value_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  value_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  value_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  value_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type FinanceWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FinanceWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FinanceWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FinanceWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<FinanceWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Finance record uniquely */
export type FinanceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Frequency = Node & {
  __typename?: 'Frequency';
  class?: Maybe<Class>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Frequency>;
  /** List of Frequency versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  subscribes: Array<FrequencysubscribesUnion>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type FrequencyClassArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FrequencyCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FrequencyDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type FrequencyHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type FrequencyPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FrequencyScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type FrequencySubscribesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type FrequencyUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type FrequencyConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FrequencyWhereUniqueInput;
};

/** A connection to a list of items. */
export type FrequencyConnection = {
  __typename?: 'FrequencyConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FrequencyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FrequencyCreateInput = {
  class?: InputMaybe<ClassCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  subscribes?: InputMaybe<FrequencysubscribesUnionCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FrequencyCreateManyInlineInput = {
  /** Connect multiple existing Frequency documents */
  connect?: InputMaybe<Array<FrequencyWhereUniqueInput>>;
  /** Create and connect multiple existing Frequency documents */
  create?: InputMaybe<Array<FrequencyCreateInput>>;
};

export type FrequencyCreateOneInlineInput = {
  /** Connect one existing Frequency document */
  connect?: InputMaybe<FrequencyWhereUniqueInput>;
  /** Create and connect one Frequency document */
  create?: InputMaybe<FrequencyCreateInput>;
};

/** An edge in a connection. */
export type FrequencyEdge = {
  __typename?: 'FrequencyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Frequency;
};

/** Identifies documents */
export type FrequencyManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FrequencyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FrequencyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FrequencyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  class?: InputMaybe<ClassWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FrequencyWhereStageInput>;
  documentInStages_none?: InputMaybe<FrequencyWhereStageInput>;
  documentInStages_some?: InputMaybe<FrequencyWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** All values in which the union is empty. */
  subscribes_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  subscribes_some?: InputMaybe<FrequencysubscribesUnionWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum FrequencyOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FrequencyUpdateInput = {
  class?: InputMaybe<ClassUpdateOneInlineInput>;
  subscribes?: InputMaybe<FrequencysubscribesUnionUpdateManyInlineInput>;
};

export type FrequencyUpdateManyInlineInput = {
  /** Connect multiple existing Frequency documents */
  connect?: InputMaybe<Array<FrequencyConnectInput>>;
  /** Create and connect multiple Frequency documents */
  create?: InputMaybe<Array<FrequencyCreateInput>>;
  /** Delete multiple Frequency documents */
  delete?: InputMaybe<Array<FrequencyWhereUniqueInput>>;
  /** Disconnect multiple Frequency documents */
  disconnect?: InputMaybe<Array<FrequencyWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Frequency documents */
  set?: InputMaybe<Array<FrequencyWhereUniqueInput>>;
  /** Update multiple Frequency documents */
  update?: InputMaybe<Array<FrequencyUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Frequency documents */
  upsert?: InputMaybe<Array<FrequencyUpsertWithNestedWhereUniqueInput>>;
};

export type FrequencyUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
};

export type FrequencyUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FrequencyUpdateManyInput;
  /** Document search */
  where: FrequencyWhereInput;
};

export type FrequencyUpdateOneInlineInput = {
  /** Connect existing Frequency document */
  connect?: InputMaybe<FrequencyWhereUniqueInput>;
  /** Create and connect one Frequency document */
  create?: InputMaybe<FrequencyCreateInput>;
  /** Delete currently connected Frequency document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Frequency document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Frequency document */
  update?: InputMaybe<FrequencyUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Frequency document */
  upsert?: InputMaybe<FrequencyUpsertWithNestedWhereUniqueInput>;
};

export type FrequencyUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FrequencyUpdateInput;
  /** Unique document search */
  where: FrequencyWhereUniqueInput;
};

export type FrequencyUpsertInput = {
  /** Create document if it didn't exist */
  create: FrequencyCreateInput;
  /** Update document if it exists */
  update: FrequencyUpdateInput;
};

export type FrequencyUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FrequencyUpsertInput;
  /** Unique document search */
  where: FrequencyWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type FrequencyWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type FrequencyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FrequencyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FrequencyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FrequencyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  class?: InputMaybe<ClassWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FrequencyWhereStageInput>;
  documentInStages_none?: InputMaybe<FrequencyWhereStageInput>;
  documentInStages_some?: InputMaybe<FrequencyWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  /** All values in which the union is empty. */
  subscribes_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  subscribes_some?: InputMaybe<FrequencysubscribesUnionWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type FrequencyWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FrequencyWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FrequencyWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FrequencyWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<FrequencyWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Frequency record uniquely */
export type FrequencyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type FrequencysubscribesUnion = Presence;

export type FrequencysubscribesUnionConnectInput = {
  Presence?: InputMaybe<PresenceConnectInput>;
};

export type FrequencysubscribesUnionCreateInput = {
  Presence?: InputMaybe<PresenceCreateInput>;
};

export type FrequencysubscribesUnionCreateManyInlineInput = {
  /** Create and connect multiple existing FrequencysubscribesUnion documents */
  create?: InputMaybe<Array<FrequencysubscribesUnionCreateInput>>;
};

export type FrequencysubscribesUnionCreateOneInlineInput = {
  /** Create and connect one FrequencysubscribesUnion document */
  create?: InputMaybe<FrequencysubscribesUnionCreateInput>;
};

export type FrequencysubscribesUnionCreateWithPositionInput = {
  Presence?: InputMaybe<PresenceCreateWithPositionInput>;
};

export type FrequencysubscribesUnionUpdateInput = {
  Presence?: InputMaybe<PresenceUpdateInput>;
};

export type FrequencysubscribesUnionUpdateManyInlineInput = {
  /** Create and connect multiple FrequencysubscribesUnion component instances */
  create?: InputMaybe<Array<FrequencysubscribesUnionCreateWithPositionInput>>;
  /** Delete multiple FrequencysubscribesUnion documents */
  delete?: InputMaybe<Array<FrequencysubscribesUnionWhereUniqueInput>>;
  /** Update multiple FrequencysubscribesUnion component instances */
  update?: InputMaybe<Array<FrequencysubscribesUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FrequencysubscribesUnion component instances */
  upsert?: InputMaybe<Array<FrequencysubscribesUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FrequencysubscribesUnionUpdateManyWithNestedWhereInput = {
  Presence?: InputMaybe<PresenceUpdateManyWithNestedWhereInput>;
};

export type FrequencysubscribesUnionUpdateOneInlineInput = {
  /** Create and connect one FrequencysubscribesUnion document */
  create?: InputMaybe<FrequencysubscribesUnionCreateInput>;
  /** Delete currently connected FrequencysubscribesUnion document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single FrequencysubscribesUnion document */
  update?: InputMaybe<FrequencysubscribesUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FrequencysubscribesUnion document */
  upsert?: InputMaybe<FrequencysubscribesUnionUpsertWithNestedWhereUniqueInput>;
};

export type FrequencysubscribesUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Presence?: InputMaybe<PresenceUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type FrequencysubscribesUnionUpdateWithNestedWhereUniqueInput = {
  Presence?: InputMaybe<PresenceUpdateWithNestedWhereUniqueInput>;
};

export type FrequencysubscribesUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Presence?: InputMaybe<PresenceUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type FrequencysubscribesUnionUpsertWithNestedWhereUniqueInput = {
  Presence?: InputMaybe<PresenceUpsertWithNestedWhereUniqueInput>;
};

export type FrequencysubscribesUnionWhereInput = {
  Presence?: InputMaybe<PresenceWhereInput>;
};

export type FrequencysubscribesUnionWhereUniqueInput = {
  Presence?: InputMaybe<PresenceWhereUniqueInput>;
};

export type Grades = Node & {
  __typename?: 'Grades';
  average?: Maybe<Scalars['Int']>;
  class?: Maybe<Class>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Grades>;
  /** List of Grades versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  month?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  subscriber?: Maybe<Subscriber>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  weeklyAssessments: Array<GradesweeklyAssessmentsUnion>;
};


export type GradesClassArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GradesCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GradesDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type GradesHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type GradesPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GradesScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type GradesSubscriberArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GradesUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GradesWeeklyAssessmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type GradesConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: GradesWhereUniqueInput;
};

/** A connection to a list of items. */
export type GradesConnection = {
  __typename?: 'GradesConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<GradesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type GradesCreateInput = {
  average?: InputMaybe<Scalars['Int']>;
  class?: InputMaybe<ClassCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  month?: InputMaybe<Scalars['String']>;
  subscriber?: InputMaybe<SubscriberCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  weeklyAssessments?: InputMaybe<GradesweeklyAssessmentsUnionCreateManyInlineInput>;
};

export type GradesCreateManyInlineInput = {
  /** Connect multiple existing Grades documents */
  connect?: InputMaybe<Array<GradesWhereUniqueInput>>;
  /** Create and connect multiple existing Grades documents */
  create?: InputMaybe<Array<GradesCreateInput>>;
};

export type GradesCreateOneInlineInput = {
  /** Connect one existing Grades document */
  connect?: InputMaybe<GradesWhereUniqueInput>;
  /** Create and connect one Grades document */
  create?: InputMaybe<GradesCreateInput>;
};

/** An edge in a connection. */
export type GradesEdge = {
  __typename?: 'GradesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Grades;
};

/** Identifies documents */
export type GradesManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GradesWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GradesWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GradesWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  average?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  average_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  average_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  average_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  average_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  average_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  average_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  average_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  class?: InputMaybe<ClassWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<GradesWhereStageInput>;
  documentInStages_none?: InputMaybe<GradesWhereStageInput>;
  documentInStages_some?: InputMaybe<GradesWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  month?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  month_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  month_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  month_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  month_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  month_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  month_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  month_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  month_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  month_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subscriber?: InputMaybe<SubscriberWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  /** All values in which the union is empty. */
  weeklyAssessments_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  weeklyAssessments_some?: InputMaybe<GradesweeklyAssessmentsUnionWhereInput>;
};

export enum GradesOrderByInput {
  AverageAsc = 'average_ASC',
  AverageDesc = 'average_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MonthAsc = 'month_ASC',
  MonthDesc = 'month_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type GradesUpdateInput = {
  average?: InputMaybe<Scalars['Int']>;
  class?: InputMaybe<ClassUpdateOneInlineInput>;
  month?: InputMaybe<Scalars['String']>;
  subscriber?: InputMaybe<SubscriberUpdateOneInlineInput>;
  weeklyAssessments?: InputMaybe<GradesweeklyAssessmentsUnionUpdateManyInlineInput>;
};

export type GradesUpdateManyInlineInput = {
  /** Connect multiple existing Grades documents */
  connect?: InputMaybe<Array<GradesConnectInput>>;
  /** Create and connect multiple Grades documents */
  create?: InputMaybe<Array<GradesCreateInput>>;
  /** Delete multiple Grades documents */
  delete?: InputMaybe<Array<GradesWhereUniqueInput>>;
  /** Disconnect multiple Grades documents */
  disconnect?: InputMaybe<Array<GradesWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Grades documents */
  set?: InputMaybe<Array<GradesWhereUniqueInput>>;
  /** Update multiple Grades documents */
  update?: InputMaybe<Array<GradesUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Grades documents */
  upsert?: InputMaybe<Array<GradesUpsertWithNestedWhereUniqueInput>>;
};

export type GradesUpdateManyInput = {
  average?: InputMaybe<Scalars['Int']>;
  month?: InputMaybe<Scalars['String']>;
};

export type GradesUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GradesUpdateManyInput;
  /** Document search */
  where: GradesWhereInput;
};

export type GradesUpdateOneInlineInput = {
  /** Connect existing Grades document */
  connect?: InputMaybe<GradesWhereUniqueInput>;
  /** Create and connect one Grades document */
  create?: InputMaybe<GradesCreateInput>;
  /** Delete currently connected Grades document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Grades document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Grades document */
  update?: InputMaybe<GradesUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Grades document */
  upsert?: InputMaybe<GradesUpsertWithNestedWhereUniqueInput>;
};

export type GradesUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GradesUpdateInput;
  /** Unique document search */
  where: GradesWhereUniqueInput;
};

export type GradesUpsertInput = {
  /** Create document if it didn't exist */
  create: GradesCreateInput;
  /** Update document if it exists */
  update: GradesUpdateInput;
};

export type GradesUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GradesUpsertInput;
  /** Unique document search */
  where: GradesWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type GradesWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type GradesWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GradesWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GradesWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GradesWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  average?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  average_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  average_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  average_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  average_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  average_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  average_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  average_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  class?: InputMaybe<ClassWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<GradesWhereStageInput>;
  documentInStages_none?: InputMaybe<GradesWhereStageInput>;
  documentInStages_some?: InputMaybe<GradesWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  month?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  month_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  month_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  month_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  month_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  month_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  month_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  month_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  month_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  month_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subscriber?: InputMaybe<SubscriberWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  /** All values in which the union is empty. */
  weeklyAssessments_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  weeklyAssessments_some?: InputMaybe<GradesweeklyAssessmentsUnionWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type GradesWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GradesWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GradesWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GradesWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<GradesWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Grades record uniquely */
export type GradesWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type GradesweeklyAssessmentsUnion = Week;

export type GradesweeklyAssessmentsUnionConnectInput = {
  Week?: InputMaybe<WeekConnectInput>;
};

export type GradesweeklyAssessmentsUnionCreateInput = {
  Week?: InputMaybe<WeekCreateInput>;
};

export type GradesweeklyAssessmentsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing GradesweeklyAssessmentsUnion documents */
  create?: InputMaybe<Array<GradesweeklyAssessmentsUnionCreateInput>>;
};

export type GradesweeklyAssessmentsUnionCreateOneInlineInput = {
  /** Create and connect one GradesweeklyAssessmentsUnion document */
  create?: InputMaybe<GradesweeklyAssessmentsUnionCreateInput>;
};

export type GradesweeklyAssessmentsUnionCreateWithPositionInput = {
  Week?: InputMaybe<WeekCreateWithPositionInput>;
};

export type GradesweeklyAssessmentsUnionUpdateInput = {
  Week?: InputMaybe<WeekUpdateInput>;
};

export type GradesweeklyAssessmentsUnionUpdateManyInlineInput = {
  /** Create and connect multiple GradesweeklyAssessmentsUnion component instances */
  create?: InputMaybe<Array<GradesweeklyAssessmentsUnionCreateWithPositionInput>>;
  /** Delete multiple GradesweeklyAssessmentsUnion documents */
  delete?: InputMaybe<Array<GradesweeklyAssessmentsUnionWhereUniqueInput>>;
  /** Update multiple GradesweeklyAssessmentsUnion component instances */
  update?: InputMaybe<Array<GradesweeklyAssessmentsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple GradesweeklyAssessmentsUnion component instances */
  upsert?: InputMaybe<Array<GradesweeklyAssessmentsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type GradesweeklyAssessmentsUnionUpdateManyWithNestedWhereInput = {
  Week?: InputMaybe<WeekUpdateManyWithNestedWhereInput>;
};

export type GradesweeklyAssessmentsUnionUpdateOneInlineInput = {
  /** Create and connect one GradesweeklyAssessmentsUnion document */
  create?: InputMaybe<GradesweeklyAssessmentsUnionCreateInput>;
  /** Delete currently connected GradesweeklyAssessmentsUnion document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single GradesweeklyAssessmentsUnion document */
  update?: InputMaybe<GradesweeklyAssessmentsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single GradesweeklyAssessmentsUnion document */
  upsert?: InputMaybe<GradesweeklyAssessmentsUnionUpsertWithNestedWhereUniqueInput>;
};

export type GradesweeklyAssessmentsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Week?: InputMaybe<WeekUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type GradesweeklyAssessmentsUnionUpdateWithNestedWhereUniqueInput = {
  Week?: InputMaybe<WeekUpdateWithNestedWhereUniqueInput>;
};

export type GradesweeklyAssessmentsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Week?: InputMaybe<WeekUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type GradesweeklyAssessmentsUnionUpsertWithNestedWhereUniqueInput = {
  Week?: InputMaybe<WeekUpsertWithNestedWhereUniqueInput>;
};

export type GradesweeklyAssessmentsUnionWhereInput = {
  Week?: InputMaybe<WeekWhereInput>;
};

export type GradesweeklyAssessmentsUnionWhereUniqueInput = {
  Week?: InputMaybe<WeekWhereUniqueInput>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export enum LessonType {
  Class = 'class',
  Live = 'live'
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
  PtBr = 'pt_BR'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one class */
  createClass?: Maybe<Class>;
  /** Create one finance */
  createFinance?: Maybe<Finance>;
  /** Create one frequency */
  createFrequency?: Maybe<Frequency>;
  /** Create one grades */
  createGrades?: Maybe<Grades>;
  /** Create one responsible */
  createResponsible?: Maybe<Responsible>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one subscriber */
  createSubscriber?: Maybe<Subscriber>;
  /** Create one teacher */
  createTeacher?: Maybe<Teacher>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one class from _all_ existing stages. Returns deleted document. */
  deleteClass?: Maybe<Class>;
  /** Delete one finance from _all_ existing stages. Returns deleted document. */
  deleteFinance?: Maybe<Finance>;
  /** Delete one frequency from _all_ existing stages. Returns deleted document. */
  deleteFrequency?: Maybe<Frequency>;
  /** Delete one grades from _all_ existing stages. Returns deleted document. */
  deleteGrades?: Maybe<Grades>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Class documents
   * @deprecated Please use the new paginated many mutation (deleteManyClassesConnection)
   */
  deleteManyClasses: BatchPayload;
  /** Delete many Class documents, return deleted documents */
  deleteManyClassesConnection: ClassConnection;
  /**
   * Delete many Finance documents
   * @deprecated Please use the new paginated many mutation (deleteManyFinancesConnection)
   */
  deleteManyFinances: BatchPayload;
  /** Delete many Finance documents, return deleted documents */
  deleteManyFinancesConnection: FinanceConnection;
  /**
   * Delete many Frequency documents
   * @deprecated Please use the new paginated many mutation (deleteManyFrequenciesConnection)
   */
  deleteManyFrequencies: BatchPayload;
  /** Delete many Frequency documents, return deleted documents */
  deleteManyFrequenciesConnection: FrequencyConnection;
  /**
   * Delete many Grades documents
   * @deprecated Please use the new paginated many mutation (deleteManyGradesesConnection)
   */
  deleteManyGradeses: BatchPayload;
  /** Delete many Grades documents, return deleted documents */
  deleteManyGradesesConnection: GradesConnection;
  /**
   * Delete many Responsible documents
   * @deprecated Please use the new paginated many mutation (deleteManyResponsiblesConnection)
   */
  deleteManyResponsibles: BatchPayload;
  /** Delete many Responsible documents, return deleted documents */
  deleteManyResponsiblesConnection: ResponsibleConnection;
  /**
   * Delete many Subscriber documents
   * @deprecated Please use the new paginated many mutation (deleteManySubscribersConnection)
   */
  deleteManySubscribers: BatchPayload;
  /** Delete many Subscriber documents, return deleted documents */
  deleteManySubscribersConnection: SubscriberConnection;
  /**
   * Delete many Teacher documents
   * @deprecated Please use the new paginated many mutation (deleteManyTeachersConnection)
   */
  deleteManyTeachers: BatchPayload;
  /** Delete many Teacher documents, return deleted documents */
  deleteManyTeachersConnection: TeacherConnection;
  /** Delete one responsible from _all_ existing stages. Returns deleted document. */
  deleteResponsible?: Maybe<Responsible>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one subscriber from _all_ existing stages. Returns deleted document. */
  deleteSubscriber?: Maybe<Subscriber>;
  /** Delete one teacher from _all_ existing stages. Returns deleted document. */
  deleteTeacher?: Maybe<Teacher>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one class */
  publishClass?: Maybe<Class>;
  /** Publish one finance */
  publishFinance?: Maybe<Finance>;
  /** Publish one frequency */
  publishFrequency?: Maybe<Frequency>;
  /** Publish one grades */
  publishGrades?: Maybe<Grades>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Class documents
   * @deprecated Please use the new paginated many mutation (publishManyClassesConnection)
   */
  publishManyClasses: BatchPayload;
  /** Publish many Class documents */
  publishManyClassesConnection: ClassConnection;
  /**
   * Publish many Finance documents
   * @deprecated Please use the new paginated many mutation (publishManyFinancesConnection)
   */
  publishManyFinances: BatchPayload;
  /** Publish many Finance documents */
  publishManyFinancesConnection: FinanceConnection;
  /**
   * Publish many Frequency documents
   * @deprecated Please use the new paginated many mutation (publishManyFrequenciesConnection)
   */
  publishManyFrequencies: BatchPayload;
  /** Publish many Frequency documents */
  publishManyFrequenciesConnection: FrequencyConnection;
  /**
   * Publish many Grades documents
   * @deprecated Please use the new paginated many mutation (publishManyGradesesConnection)
   */
  publishManyGradeses: BatchPayload;
  /** Publish many Grades documents */
  publishManyGradesesConnection: GradesConnection;
  /**
   * Publish many Responsible documents
   * @deprecated Please use the new paginated many mutation (publishManyResponsiblesConnection)
   */
  publishManyResponsibles: BatchPayload;
  /** Publish many Responsible documents */
  publishManyResponsiblesConnection: ResponsibleConnection;
  /**
   * Publish many Subscriber documents
   * @deprecated Please use the new paginated many mutation (publishManySubscribersConnection)
   */
  publishManySubscribers: BatchPayload;
  /** Publish many Subscriber documents */
  publishManySubscribersConnection: SubscriberConnection;
  /**
   * Publish many Teacher documents
   * @deprecated Please use the new paginated many mutation (publishManyTeachersConnection)
   */
  publishManyTeachers: BatchPayload;
  /** Publish many Teacher documents */
  publishManyTeachersConnection: TeacherConnection;
  /** Publish one responsible */
  publishResponsible?: Maybe<Responsible>;
  /** Publish one subscriber */
  publishSubscriber?: Maybe<Subscriber>;
  /** Publish one teacher */
  publishTeacher?: Maybe<Teacher>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one class */
  schedulePublishClass?: Maybe<Class>;
  /** Schedule to publish one finance */
  schedulePublishFinance?: Maybe<Finance>;
  /** Schedule to publish one frequency */
  schedulePublishFrequency?: Maybe<Frequency>;
  /** Schedule to publish one grades */
  schedulePublishGrades?: Maybe<Grades>;
  /** Schedule to publish one responsible */
  schedulePublishResponsible?: Maybe<Responsible>;
  /** Schedule to publish one subscriber */
  schedulePublishSubscriber?: Maybe<Subscriber>;
  /** Schedule to publish one teacher */
  schedulePublishTeacher?: Maybe<Teacher>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one class from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishClass?: Maybe<Class>;
  /** Unpublish one finance from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFinance?: Maybe<Finance>;
  /** Unpublish one frequency from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFrequency?: Maybe<Frequency>;
  /** Unpublish one grades from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishGrades?: Maybe<Grades>;
  /** Unpublish one responsible from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishResponsible?: Maybe<Responsible>;
  /** Unpublish one subscriber from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSubscriber?: Maybe<Subscriber>;
  /** Unpublish one teacher from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTeacher?: Maybe<Teacher>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one class from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishClass?: Maybe<Class>;
  /** Unpublish one finance from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFinance?: Maybe<Finance>;
  /** Unpublish one frequency from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFrequency?: Maybe<Frequency>;
  /** Unpublish one grades from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishGrades?: Maybe<Grades>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Class documents
   * @deprecated Please use the new paginated many mutation (unpublishManyClassesConnection)
   */
  unpublishManyClasses: BatchPayload;
  /** Find many Class documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyClassesConnection: ClassConnection;
  /**
   * Unpublish many Finance documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFinancesConnection)
   */
  unpublishManyFinances: BatchPayload;
  /** Find many Finance documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFinancesConnection: FinanceConnection;
  /**
   * Unpublish many Frequency documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFrequenciesConnection)
   */
  unpublishManyFrequencies: BatchPayload;
  /** Find many Frequency documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFrequenciesConnection: FrequencyConnection;
  /**
   * Unpublish many Grades documents
   * @deprecated Please use the new paginated many mutation (unpublishManyGradesesConnection)
   */
  unpublishManyGradeses: BatchPayload;
  /** Find many Grades documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyGradesesConnection: GradesConnection;
  /**
   * Unpublish many Responsible documents
   * @deprecated Please use the new paginated many mutation (unpublishManyResponsiblesConnection)
   */
  unpublishManyResponsibles: BatchPayload;
  /** Find many Responsible documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyResponsiblesConnection: ResponsibleConnection;
  /**
   * Unpublish many Subscriber documents
   * @deprecated Please use the new paginated many mutation (unpublishManySubscribersConnection)
   */
  unpublishManySubscribers: BatchPayload;
  /** Find many Subscriber documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySubscribersConnection: SubscriberConnection;
  /**
   * Unpublish many Teacher documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTeachersConnection)
   */
  unpublishManyTeachers: BatchPayload;
  /** Find many Teacher documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTeachersConnection: TeacherConnection;
  /** Unpublish one responsible from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishResponsible?: Maybe<Responsible>;
  /** Unpublish one subscriber from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSubscriber?: Maybe<Subscriber>;
  /** Unpublish one teacher from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTeacher?: Maybe<Teacher>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one class */
  updateClass?: Maybe<Class>;
  /** Update one finance */
  updateFinance?: Maybe<Finance>;
  /** Update one frequency */
  updateFrequency?: Maybe<Frequency>;
  /** Update one grades */
  updateGrades?: Maybe<Grades>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many classes
   * @deprecated Please use the new paginated many mutation (updateManyClassesConnection)
   */
  updateManyClasses: BatchPayload;
  /** Update many Class documents */
  updateManyClassesConnection: ClassConnection;
  /**
   * Update many finances
   * @deprecated Please use the new paginated many mutation (updateManyFinancesConnection)
   */
  updateManyFinances: BatchPayload;
  /** Update many Finance documents */
  updateManyFinancesConnection: FinanceConnection;
  /**
   * Update many frequencies
   * @deprecated Please use the new paginated many mutation (updateManyFrequenciesConnection)
   */
  updateManyFrequencies: BatchPayload;
  /** Update many Frequency documents */
  updateManyFrequenciesConnection: FrequencyConnection;
  /**
   * Update many gradeses
   * @deprecated Please use the new paginated many mutation (updateManyGradesesConnection)
   */
  updateManyGradeses: BatchPayload;
  /** Update many Grades documents */
  updateManyGradesesConnection: GradesConnection;
  /**
   * Update many responsibles
   * @deprecated Please use the new paginated many mutation (updateManyResponsiblesConnection)
   */
  updateManyResponsibles: BatchPayload;
  /** Update many Responsible documents */
  updateManyResponsiblesConnection: ResponsibleConnection;
  /**
   * Update many subscribers
   * @deprecated Please use the new paginated many mutation (updateManySubscribersConnection)
   */
  updateManySubscribers: BatchPayload;
  /** Update many Subscriber documents */
  updateManySubscribersConnection: SubscriberConnection;
  /**
   * Update many teachers
   * @deprecated Please use the new paginated many mutation (updateManyTeachersConnection)
   */
  updateManyTeachers: BatchPayload;
  /** Update many Teacher documents */
  updateManyTeachersConnection: TeacherConnection;
  /** Update one responsible */
  updateResponsible?: Maybe<Responsible>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one subscriber */
  updateSubscriber?: Maybe<Subscriber>;
  /** Update one teacher */
  updateTeacher?: Maybe<Teacher>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one class */
  upsertClass?: Maybe<Class>;
  /** Upsert one finance */
  upsertFinance?: Maybe<Finance>;
  /** Upsert one frequency */
  upsertFrequency?: Maybe<Frequency>;
  /** Upsert one grades */
  upsertGrades?: Maybe<Grades>;
  /** Upsert one responsible */
  upsertResponsible?: Maybe<Responsible>;
  /** Upsert one subscriber */
  upsertSubscriber?: Maybe<Subscriber>;
  /** Upsert one teacher */
  upsertTeacher?: Maybe<Teacher>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateClassArgs = {
  data: ClassCreateInput;
};


export type MutationCreateFinanceArgs = {
  data: FinanceCreateInput;
};


export type MutationCreateFrequencyArgs = {
  data: FrequencyCreateInput;
};


export type MutationCreateGradesArgs = {
  data: GradesCreateInput;
};


export type MutationCreateResponsibleArgs = {
  data: ResponsibleCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateSubscriberArgs = {
  data: SubscriberCreateInput;
};


export type MutationCreateTeacherArgs = {
  data: TeacherCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteClassArgs = {
  where: ClassWhereUniqueInput;
};


export type MutationDeleteFinanceArgs = {
  where: FinanceWhereUniqueInput;
};


export type MutationDeleteFrequencyArgs = {
  where: FrequencyWhereUniqueInput;
};


export type MutationDeleteGradesArgs = {
  where: GradesWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyClassesArgs = {
  where?: InputMaybe<ClassManyWhereInput>;
};


export type MutationDeleteManyClassesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClassManyWhereInput>;
};


export type MutationDeleteManyFinancesArgs = {
  where?: InputMaybe<FinanceManyWhereInput>;
};


export type MutationDeleteManyFinancesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FinanceManyWhereInput>;
};


export type MutationDeleteManyFrequenciesArgs = {
  where?: InputMaybe<FrequencyManyWhereInput>;
};


export type MutationDeleteManyFrequenciesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FrequencyManyWhereInput>;
};


export type MutationDeleteManyGradesesArgs = {
  where?: InputMaybe<GradesManyWhereInput>;
};


export type MutationDeleteManyGradesesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GradesManyWhereInput>;
};


export type MutationDeleteManyResponsiblesArgs = {
  where?: InputMaybe<ResponsibleManyWhereInput>;
};


export type MutationDeleteManyResponsiblesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResponsibleManyWhereInput>;
};


export type MutationDeleteManySubscribersArgs = {
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationDeleteManySubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationDeleteManyTeachersArgs = {
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationDeleteManyTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationDeleteResponsibleArgs = {
  where: ResponsibleWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteSubscriberArgs = {
  where: SubscriberWhereUniqueInput;
};


export type MutationDeleteTeacherArgs = {
  where: TeacherWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishClassArgs = {
  to?: Array<Stage>;
  where: ClassWhereUniqueInput;
};


export type MutationPublishFinanceArgs = {
  to?: Array<Stage>;
  where: FinanceWhereUniqueInput;
};


export type MutationPublishFrequencyArgs = {
  to?: Array<Stage>;
  where: FrequencyWhereUniqueInput;
};


export type MutationPublishGradesArgs = {
  to?: Array<Stage>;
  where: GradesWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyClassesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ClassManyWhereInput>;
};


export type MutationPublishManyClassesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ClassManyWhereInput>;
};


export type MutationPublishManyFinancesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<FinanceManyWhereInput>;
};


export type MutationPublishManyFinancesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<FinanceManyWhereInput>;
};


export type MutationPublishManyFrequenciesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<FrequencyManyWhereInput>;
};


export type MutationPublishManyFrequenciesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<FrequencyManyWhereInput>;
};


export type MutationPublishManyGradesesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<GradesManyWhereInput>;
};


export type MutationPublishManyGradesesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<GradesManyWhereInput>;
};


export type MutationPublishManyResponsiblesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ResponsibleManyWhereInput>;
};


export type MutationPublishManyResponsiblesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ResponsibleManyWhereInput>;
};


export type MutationPublishManySubscribersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationPublishManySubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationPublishManyTeachersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationPublishManyTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationPublishResponsibleArgs = {
  to?: Array<Stage>;
  where: ResponsibleWhereUniqueInput;
};


export type MutationPublishSubscriberArgs = {
  to?: Array<Stage>;
  where: SubscriberWhereUniqueInput;
};


export type MutationPublishTeacherArgs = {
  to?: Array<Stage>;
  where: TeacherWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishClassArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ClassWhereUniqueInput;
};


export type MutationSchedulePublishFinanceArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: FinanceWhereUniqueInput;
};


export type MutationSchedulePublishFrequencyArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: FrequencyWhereUniqueInput;
};


export type MutationSchedulePublishGradesArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: GradesWhereUniqueInput;
};


export type MutationSchedulePublishResponsibleArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ResponsibleWhereUniqueInput;
};


export type MutationSchedulePublishSubscriberArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: SubscriberWhereUniqueInput;
};


export type MutationSchedulePublishTeacherArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: TeacherWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishClassArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ClassWhereUniqueInput;
};


export type MutationScheduleUnpublishFinanceArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: FinanceWhereUniqueInput;
};


export type MutationScheduleUnpublishFrequencyArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: FrequencyWhereUniqueInput;
};


export type MutationScheduleUnpublishGradesArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: GradesWhereUniqueInput;
};


export type MutationScheduleUnpublishResponsibleArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ResponsibleWhereUniqueInput;
};


export type MutationScheduleUnpublishSubscriberArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: SubscriberWhereUniqueInput;
};


export type MutationScheduleUnpublishTeacherArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: TeacherWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishClassArgs = {
  from?: Array<Stage>;
  where: ClassWhereUniqueInput;
};


export type MutationUnpublishFinanceArgs = {
  from?: Array<Stage>;
  where: FinanceWhereUniqueInput;
};


export type MutationUnpublishFrequencyArgs = {
  from?: Array<Stage>;
  where: FrequencyWhereUniqueInput;
};


export type MutationUnpublishGradesArgs = {
  from?: Array<Stage>;
  where: GradesWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyClassesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ClassManyWhereInput>;
};


export type MutationUnpublishManyClassesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ClassManyWhereInput>;
};


export type MutationUnpublishManyFinancesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<FinanceManyWhereInput>;
};


export type MutationUnpublishManyFinancesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<FinanceManyWhereInput>;
};


export type MutationUnpublishManyFrequenciesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<FrequencyManyWhereInput>;
};


export type MutationUnpublishManyFrequenciesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<FrequencyManyWhereInput>;
};


export type MutationUnpublishManyGradesesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<GradesManyWhereInput>;
};


export type MutationUnpublishManyGradesesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<GradesManyWhereInput>;
};


export type MutationUnpublishManyResponsiblesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ResponsibleManyWhereInput>;
};


export type MutationUnpublishManyResponsiblesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ResponsibleManyWhereInput>;
};


export type MutationUnpublishManySubscribersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationUnpublishManySubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationUnpublishManyTeachersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationUnpublishManyTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationUnpublishResponsibleArgs = {
  from?: Array<Stage>;
  where: ResponsibleWhereUniqueInput;
};


export type MutationUnpublishSubscriberArgs = {
  from?: Array<Stage>;
  where: SubscriberWhereUniqueInput;
};


export type MutationUnpublishTeacherArgs = {
  from?: Array<Stage>;
  where: TeacherWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateClassArgs = {
  data: ClassUpdateInput;
  where: ClassWhereUniqueInput;
};


export type MutationUpdateFinanceArgs = {
  data: FinanceUpdateInput;
  where: FinanceWhereUniqueInput;
};


export type MutationUpdateFrequencyArgs = {
  data: FrequencyUpdateInput;
  where: FrequencyWhereUniqueInput;
};


export type MutationUpdateGradesArgs = {
  data: GradesUpdateInput;
  where: GradesWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyClassesArgs = {
  data: ClassUpdateManyInput;
  where?: InputMaybe<ClassManyWhereInput>;
};


export type MutationUpdateManyClassesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ClassUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClassManyWhereInput>;
};


export type MutationUpdateManyFinancesArgs = {
  data: FinanceUpdateManyInput;
  where?: InputMaybe<FinanceManyWhereInput>;
};


export type MutationUpdateManyFinancesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: FinanceUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FinanceManyWhereInput>;
};


export type MutationUpdateManyFrequenciesArgs = {
  data: FrequencyUpdateManyInput;
  where?: InputMaybe<FrequencyManyWhereInput>;
};


export type MutationUpdateManyFrequenciesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: FrequencyUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FrequencyManyWhereInput>;
};


export type MutationUpdateManyGradesesArgs = {
  data: GradesUpdateManyInput;
  where?: InputMaybe<GradesManyWhereInput>;
};


export type MutationUpdateManyGradesesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: GradesUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GradesManyWhereInput>;
};


export type MutationUpdateManyResponsiblesArgs = {
  data: ResponsibleUpdateManyInput;
  where?: InputMaybe<ResponsibleManyWhereInput>;
};


export type MutationUpdateManyResponsiblesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ResponsibleUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ResponsibleManyWhereInput>;
};


export type MutationUpdateManySubscribersArgs = {
  data: SubscriberUpdateManyInput;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationUpdateManySubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: SubscriberUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubscriberManyWhereInput>;
};


export type MutationUpdateManyTeachersArgs = {
  data: TeacherUpdateManyInput;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationUpdateManyTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: TeacherUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeacherManyWhereInput>;
};


export type MutationUpdateResponsibleArgs = {
  data: ResponsibleUpdateInput;
  where: ResponsibleWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateSubscriberArgs = {
  data: SubscriberUpdateInput;
  where: SubscriberWhereUniqueInput;
};


export type MutationUpdateTeacherArgs = {
  data: TeacherUpdateInput;
  where: TeacherWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertClassArgs = {
  upsert: ClassUpsertInput;
  where: ClassWhereUniqueInput;
};


export type MutationUpsertFinanceArgs = {
  upsert: FinanceUpsertInput;
  where: FinanceWhereUniqueInput;
};


export type MutationUpsertFrequencyArgs = {
  upsert: FrequencyUpsertInput;
  where: FrequencyWhereUniqueInput;
};


export type MutationUpsertGradesArgs = {
  upsert: GradesUpsertInput;
  where: GradesWhereUniqueInput;
};


export type MutationUpsertResponsibleArgs = {
  upsert: ResponsibleUpsertInput;
  where: ResponsibleWhereUniqueInput;
};


export type MutationUpsertSubscriberArgs = {
  upsert: SubscriberUpsertInput;
  where: SubscriberWhereUniqueInput;
};


export type MutationUpsertTeacherArgs = {
  upsert: TeacherUpsertInput;
  where: TeacherWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Presence = {
  __typename?: 'Presence';
  /** The unique identifier */
  id: Scalars['ID'];
  prensente?: Maybe<Scalars['Boolean']>;
  /** System stage field */
  stage: Stage;
  subscriber?: Maybe<Subscriber>;
};


export type PresenceSubscriberArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PresenceConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PresenceWhereUniqueInput;
};

/** A connection to a list of items. */
export type PresenceConnection = {
  __typename?: 'PresenceConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PresenceEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PresenceCreateInput = {
  prensente?: InputMaybe<Scalars['Boolean']>;
  subscriber?: InputMaybe<SubscriberCreateOneInlineInput>;
};

export type PresenceCreateManyInlineInput = {
  /** Create and connect multiple existing Presence documents */
  create?: InputMaybe<Array<PresenceCreateInput>>;
};

export type PresenceCreateOneInlineInput = {
  /** Create and connect one Presence document */
  create?: InputMaybe<PresenceCreateInput>;
};

export type PresenceCreateWithPositionInput = {
  /** Document to create */
  data: PresenceCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type PresenceEdge = {
  __typename?: 'PresenceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Presence;
};

/** Identifies documents */
export type PresenceManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PresenceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PresenceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PresenceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  prensente?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  prensente_not?: InputMaybe<Scalars['Boolean']>;
  subscriber?: InputMaybe<SubscriberWhereInput>;
};

export enum PresenceOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PrensenteAsc = 'prensente_ASC',
  PrensenteDesc = 'prensente_DESC'
}

export type PresenceParent = Frequency;

export type PresenceParentConnectInput = {
  Frequency?: InputMaybe<FrequencyConnectInput>;
};

export type PresenceParentCreateInput = {
  Frequency?: InputMaybe<FrequencyCreateInput>;
};

export type PresenceParentCreateManyInlineInput = {
  /** Connect multiple existing PresenceParent documents */
  connect?: InputMaybe<Array<PresenceParentWhereUniqueInput>>;
  /** Create and connect multiple existing PresenceParent documents */
  create?: InputMaybe<Array<PresenceParentCreateInput>>;
};

export type PresenceParentCreateOneInlineInput = {
  /** Connect one existing PresenceParent document */
  connect?: InputMaybe<PresenceParentWhereUniqueInput>;
  /** Create and connect one PresenceParent document */
  create?: InputMaybe<PresenceParentCreateInput>;
};

export type PresenceParentUpdateInput = {
  Frequency?: InputMaybe<FrequencyUpdateInput>;
};

export type PresenceParentUpdateManyInlineInput = {
  /** Connect multiple existing PresenceParent documents */
  connect?: InputMaybe<Array<PresenceParentConnectInput>>;
  /** Create and connect multiple PresenceParent documents */
  create?: InputMaybe<Array<PresenceParentCreateInput>>;
  /** Delete multiple PresenceParent documents */
  delete?: InputMaybe<Array<PresenceParentWhereUniqueInput>>;
  /** Disconnect multiple PresenceParent documents */
  disconnect?: InputMaybe<Array<PresenceParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PresenceParent documents */
  set?: InputMaybe<Array<PresenceParentWhereUniqueInput>>;
  /** Update multiple PresenceParent documents */
  update?: InputMaybe<Array<PresenceParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PresenceParent documents */
  upsert?: InputMaybe<Array<PresenceParentUpsertWithNestedWhereUniqueInput>>;
};

export type PresenceParentUpdateManyWithNestedWhereInput = {
  Frequency?: InputMaybe<FrequencyUpdateManyWithNestedWhereInput>;
};

export type PresenceParentUpdateOneInlineInput = {
  /** Connect existing PresenceParent document */
  connect?: InputMaybe<PresenceParentWhereUniqueInput>;
  /** Create and connect one PresenceParent document */
  create?: InputMaybe<PresenceParentCreateInput>;
  /** Delete currently connected PresenceParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected PresenceParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single PresenceParent document */
  update?: InputMaybe<PresenceParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PresenceParent document */
  upsert?: InputMaybe<PresenceParentUpsertWithNestedWhereUniqueInput>;
};

export type PresenceParentUpdateWithNestedWhereUniqueInput = {
  Frequency?: InputMaybe<FrequencyUpdateWithNestedWhereUniqueInput>;
};

export type PresenceParentUpsertWithNestedWhereUniqueInput = {
  Frequency?: InputMaybe<FrequencyUpsertWithNestedWhereUniqueInput>;
};

export type PresenceParentWhereInput = {
  Frequency?: InputMaybe<FrequencyWhereInput>;
};

export type PresenceParentWhereUniqueInput = {
  Frequency?: InputMaybe<FrequencyWhereUniqueInput>;
};

export type PresenceUpdateInput = {
  prensente?: InputMaybe<Scalars['Boolean']>;
  subscriber?: InputMaybe<SubscriberUpdateOneInlineInput>;
};

export type PresenceUpdateManyInlineInput = {
  /** Create and connect multiple Presence component instances */
  create?: InputMaybe<Array<PresenceCreateWithPositionInput>>;
  /** Delete multiple Presence documents */
  delete?: InputMaybe<Array<PresenceWhereUniqueInput>>;
  /** Update multiple Presence component instances */
  update?: InputMaybe<Array<PresenceUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Presence component instances */
  upsert?: InputMaybe<Array<PresenceUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PresenceUpdateManyInput = {
  prensente?: InputMaybe<Scalars['Boolean']>;
};

export type PresenceUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PresenceUpdateManyInput;
  /** Document search */
  where: PresenceWhereInput;
};

export type PresenceUpdateOneInlineInput = {
  /** Create and connect one Presence document */
  create?: InputMaybe<PresenceCreateInput>;
  /** Delete currently connected Presence document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Presence document */
  update?: InputMaybe<PresenceUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Presence document */
  upsert?: InputMaybe<PresenceUpsertWithNestedWhereUniqueInput>;
};

export type PresenceUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<PresenceUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PresenceWhereUniqueInput;
};

export type PresenceUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PresenceUpdateInput;
  /** Unique document search */
  where: PresenceWhereUniqueInput;
};

export type PresenceUpsertInput = {
  /** Create document if it didn't exist */
  create: PresenceCreateInput;
  /** Update document if it exists */
  update: PresenceUpdateInput;
};

export type PresenceUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<PresenceUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: PresenceWhereUniqueInput;
};

export type PresenceUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PresenceUpsertInput;
  /** Unique document search */
  where: PresenceWhereUniqueInput;
};

/** Identifies documents */
export type PresenceWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PresenceWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PresenceWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PresenceWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  prensente?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  prensente_not?: InputMaybe<Scalars['Boolean']>;
  subscriber?: InputMaybe<SubscriberWhereInput>;
};

/** References Presence record uniquely */
export type PresenceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single class */
  class?: Maybe<Class>;
  /** Retrieve document version */
  classVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple classes */
  classes: Array<Class>;
  /** Retrieve multiple classes using the Relay connection interface */
  classesConnection: ClassConnection;
  /** Retrieve a single finance */
  finance?: Maybe<Finance>;
  /** Retrieve document version */
  financeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple finances */
  finances: Array<Finance>;
  /** Retrieve multiple finances using the Relay connection interface */
  financesConnection: FinanceConnection;
  /** Retrieve multiple frequencies */
  frequencies: Array<Frequency>;
  /** Retrieve multiple frequencies using the Relay connection interface */
  frequenciesConnection: FrequencyConnection;
  /** Retrieve a single frequency */
  frequency?: Maybe<Frequency>;
  /** Retrieve document version */
  frequencyVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single grades */
  grades?: Maybe<Grades>;
  /** Retrieve document version */
  gradesVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple gradeses */
  gradeses: Array<Grades>;
  /** Retrieve multiple gradeses using the Relay connection interface */
  gradesesConnection: GradesConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single responsible */
  responsible?: Maybe<Responsible>;
  /** Retrieve document version */
  responsibleVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple responsibles */
  responsibles: Array<Responsible>;
  /** Retrieve multiple responsibles using the Relay connection interface */
  responsiblesConnection: ResponsibleConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single subscriber */
  subscriber?: Maybe<Subscriber>;
  /** Retrieve document version */
  subscriberVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple subscribers */
  subscribers: Array<Subscriber>;
  /** Retrieve multiple subscribers using the Relay connection interface */
  subscribersConnection: SubscriberConnection;
  /** Retrieve a single teacher */
  teacher?: Maybe<Teacher>;
  /** Retrieve document version */
  teacherVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple teachers */
  teachers: Array<Teacher>;
  /** Retrieve multiple teachers using the Relay connection interface */
  teachersConnection: TeacherConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryClassArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ClassWhereUniqueInput;
};


export type QueryClassVersionArgs = {
  where: VersionWhereInput;
};


export type QueryClassesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ClassOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ClassWhereInput>;
};


export type QueryClassesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ClassOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ClassWhereInput>;
};


export type QueryFinanceArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: FinanceWhereUniqueInput;
};


export type QueryFinanceVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFinancesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FinanceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FinanceWhereInput>;
};


export type QueryFinancesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FinanceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FinanceWhereInput>;
};


export type QueryFrequenciesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FrequencyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FrequencyWhereInput>;
};


export type QueryFrequenciesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FrequencyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FrequencyWhereInput>;
};


export type QueryFrequencyArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: FrequencyWhereUniqueInput;
};


export type QueryFrequencyVersionArgs = {
  where: VersionWhereInput;
};


export type QueryGradesArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: GradesWhereUniqueInput;
};


export type QueryGradesVersionArgs = {
  where: VersionWhereInput;
};


export type QueryGradesesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GradesOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<GradesWhereInput>;
};


export type QueryGradesesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GradesOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<GradesWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryResponsibleArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ResponsibleWhereUniqueInput;
};


export type QueryResponsibleVersionArgs = {
  where: VersionWhereInput;
};


export type QueryResponsiblesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ResponsibleOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ResponsibleWhereInput>;
};


export type QueryResponsiblesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ResponsibleOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ResponsibleWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QuerySubscriberArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SubscriberWhereUniqueInput;
};


export type QuerySubscriberVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySubscribersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SubscriberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SubscriberWhereInput>;
};


export type QuerySubscribersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SubscriberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SubscriberWhereInput>;
};


export type QueryTeacherArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TeacherWhereUniqueInput;
};


export type QueryTeacherVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTeachersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TeacherOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TeacherWhereInput>;
};


export type QueryTeachersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TeacherOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TeacherWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

export type Responsible = Node & {
  __typename?: 'Responsible';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Responsible>;
  email: Scalars['String'];
  grades: Array<Scalars['Json']>;
  /** List of Responsible versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  payment?: Maybe<Scalars['Boolean']>;
  pictureUrl?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  subscriber?: Maybe<Subscriber>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ResponsibleCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ResponsibleDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ResponsibleHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ResponsiblePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ResponsibleScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ResponsibleSubscriberArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type ResponsibleUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ResponsibleConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ResponsibleWhereUniqueInput;
};

/** A connection to a list of items. */
export type ResponsibleConnection = {
  __typename?: 'ResponsibleConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ResponsibleEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ResponsibleCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  grades?: InputMaybe<Array<Scalars['Json']>>;
  name: Scalars['String'];
  payment?: InputMaybe<Scalars['Boolean']>;
  pictureUrl?: InputMaybe<Scalars['String']>;
  subscriber?: InputMaybe<SubscriberCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ResponsibleCreateManyInlineInput = {
  /** Connect multiple existing Responsible documents */
  connect?: InputMaybe<Array<ResponsibleWhereUniqueInput>>;
  /** Create and connect multiple existing Responsible documents */
  create?: InputMaybe<Array<ResponsibleCreateInput>>;
};

export type ResponsibleCreateOneInlineInput = {
  /** Connect one existing Responsible document */
  connect?: InputMaybe<ResponsibleWhereUniqueInput>;
  /** Create and connect one Responsible document */
  create?: InputMaybe<ResponsibleCreateInput>;
};

/** An edge in a connection. */
export type ResponsibleEdge = {
  __typename?: 'ResponsibleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Responsible;
};

/** Identifies documents */
export type ResponsibleManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ResponsibleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ResponsibleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ResponsibleWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ResponsibleWhereStageInput>;
  documentInStages_none?: InputMaybe<ResponsibleWhereStageInput>;
  documentInStages_some?: InputMaybe<ResponsibleWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given json path. */
  grades_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  grades_value_recursive?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  payment?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  payment_not?: InputMaybe<Scalars['Boolean']>;
  pictureUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pictureUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pictureUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pictureUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pictureUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pictureUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pictureUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pictureUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pictureUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pictureUrl_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subscriber?: InputMaybe<SubscriberWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ResponsibleOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PaymentAsc = 'payment_ASC',
  PaymentDesc = 'payment_DESC',
  PictureUrlAsc = 'pictureUrl_ASC',
  PictureUrlDesc = 'pictureUrl_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ResponsibleUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  grades?: InputMaybe<Array<Scalars['Json']>>;
  name?: InputMaybe<Scalars['String']>;
  payment?: InputMaybe<Scalars['Boolean']>;
  pictureUrl?: InputMaybe<Scalars['String']>;
  subscriber?: InputMaybe<SubscriberUpdateOneInlineInput>;
};

export type ResponsibleUpdateManyInlineInput = {
  /** Connect multiple existing Responsible documents */
  connect?: InputMaybe<Array<ResponsibleConnectInput>>;
  /** Create and connect multiple Responsible documents */
  create?: InputMaybe<Array<ResponsibleCreateInput>>;
  /** Delete multiple Responsible documents */
  delete?: InputMaybe<Array<ResponsibleWhereUniqueInput>>;
  /** Disconnect multiple Responsible documents */
  disconnect?: InputMaybe<Array<ResponsibleWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Responsible documents */
  set?: InputMaybe<Array<ResponsibleWhereUniqueInput>>;
  /** Update multiple Responsible documents */
  update?: InputMaybe<Array<ResponsibleUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Responsible documents */
  upsert?: InputMaybe<Array<ResponsibleUpsertWithNestedWhereUniqueInput>>;
};

export type ResponsibleUpdateManyInput = {
  grades?: InputMaybe<Array<Scalars['Json']>>;
  name?: InputMaybe<Scalars['String']>;
  payment?: InputMaybe<Scalars['Boolean']>;
  pictureUrl?: InputMaybe<Scalars['String']>;
};

export type ResponsibleUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ResponsibleUpdateManyInput;
  /** Document search */
  where: ResponsibleWhereInput;
};

export type ResponsibleUpdateOneInlineInput = {
  /** Connect existing Responsible document */
  connect?: InputMaybe<ResponsibleWhereUniqueInput>;
  /** Create and connect one Responsible document */
  create?: InputMaybe<ResponsibleCreateInput>;
  /** Delete currently connected Responsible document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Responsible document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Responsible document */
  update?: InputMaybe<ResponsibleUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Responsible document */
  upsert?: InputMaybe<ResponsibleUpsertWithNestedWhereUniqueInput>;
};

export type ResponsibleUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ResponsibleUpdateInput;
  /** Unique document search */
  where: ResponsibleWhereUniqueInput;
};

export type ResponsibleUpsertInput = {
  /** Create document if it didn't exist */
  create: ResponsibleCreateInput;
  /** Update document if it exists */
  update: ResponsibleUpdateInput;
};

export type ResponsibleUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ResponsibleUpsertInput;
  /** Unique document search */
  where: ResponsibleWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ResponsibleWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ResponsibleWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ResponsibleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ResponsibleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ResponsibleWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ResponsibleWhereStageInput>;
  documentInStages_none?: InputMaybe<ResponsibleWhereStageInput>;
  documentInStages_some?: InputMaybe<ResponsibleWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  /** All values containing the given json path. */
  grades_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  grades_value_recursive?: InputMaybe<Scalars['Json']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  payment?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  payment_not?: InputMaybe<Scalars['Boolean']>;
  pictureUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pictureUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pictureUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pictureUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pictureUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pictureUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pictureUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pictureUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pictureUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pictureUrl_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  subscriber?: InputMaybe<SubscriberWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ResponsibleWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ResponsibleWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ResponsibleWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ResponsibleWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ResponsibleWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Responsible record uniquely */
export type ResponsibleWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Class | Finance | Frequency | Grades | Responsible | Subscriber | Teacher;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export type Subscriber = Node & {
  __typename?: 'Subscriber';
  address?: Maybe<Scalars['String']>;
  class?: Maybe<Class>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Subscriber>;
  email: Scalars['String'];
  finances: Array<Finance>;
  gradeses: Array<Grades>;
  /** List of Subscriber versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type SubscriberClassArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SubscriberCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SubscriberDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type SubscriberFinancesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<FinanceOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FinanceWhereInput>;
};


export type SubscriberGradesesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<GradesOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GradesWhereInput>;
};


export type SubscriberHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type SubscriberPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type SubscriberScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type SubscriberUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type SubscriberConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SubscriberWhereUniqueInput;
};

/** A connection to a list of items. */
export type SubscriberConnection = {
  __typename?: 'SubscriberConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SubscriberEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SubscriberCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  class?: InputMaybe<ClassCreateOneInlineInput>;
  clehzzwft2o7z01t391n73da9?: InputMaybe<ResponsibleCreateManyInlineInput>;
  clf0g6x4d1voc01td0tegc2zr?: InputMaybe<PresenceCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  finances?: InputMaybe<FinanceCreateManyInlineInput>;
  gradeses?: InputMaybe<GradesCreateManyInlineInput>;
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  pictureUrl?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubscriberCreateManyInlineInput = {
  /** Connect multiple existing Subscriber documents */
  connect?: InputMaybe<Array<SubscriberWhereUniqueInput>>;
  /** Create and connect multiple existing Subscriber documents */
  create?: InputMaybe<Array<SubscriberCreateInput>>;
};

export type SubscriberCreateOneInlineInput = {
  /** Connect one existing Subscriber document */
  connect?: InputMaybe<SubscriberWhereUniqueInput>;
  /** Create and connect one Subscriber document */
  create?: InputMaybe<SubscriberCreateInput>;
};

/** An edge in a connection. */
export type SubscriberEdge = {
  __typename?: 'SubscriberEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Subscriber;
};

/** Identifies documents */
export type SubscriberManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  address_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  address_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  address_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  address_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: InputMaybe<Scalars['String']>;
  class?: InputMaybe<ClassWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SubscriberWhereStageInput>;
  documentInStages_none?: InputMaybe<SubscriberWhereStageInput>;
  documentInStages_some?: InputMaybe<SubscriberWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  finances_every?: InputMaybe<FinanceWhereInput>;
  finances_none?: InputMaybe<FinanceWhereInput>;
  finances_some?: InputMaybe<FinanceWhereInput>;
  gradeses_every?: InputMaybe<GradesWhereInput>;
  gradeses_none?: InputMaybe<GradesWhereInput>;
  gradeses_some?: InputMaybe<GradesWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phone_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phone_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: InputMaybe<Scalars['String']>;
  pictureUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pictureUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pictureUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pictureUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pictureUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pictureUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pictureUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pictureUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pictureUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pictureUrl_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum SubscriberOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  PictureUrlAsc = 'pictureUrl_ASC',
  PictureUrlDesc = 'pictureUrl_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type SubscriberUpdateInput = {
  address?: InputMaybe<Scalars['String']>;
  class?: InputMaybe<ClassUpdateOneInlineInput>;
  clehzzwft2o7z01t391n73da9?: InputMaybe<ResponsibleUpdateManyInlineInput>;
  clf0g6x4d1voc01td0tegc2zr?: InputMaybe<PresenceUpdateManyInlineInput>;
  email?: InputMaybe<Scalars['String']>;
  finances?: InputMaybe<FinanceUpdateManyInlineInput>;
  gradeses?: InputMaybe<GradesUpdateManyInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  pictureUrl?: InputMaybe<Scalars['String']>;
};

export type SubscriberUpdateManyInlineInput = {
  /** Connect multiple existing Subscriber documents */
  connect?: InputMaybe<Array<SubscriberConnectInput>>;
  /** Create and connect multiple Subscriber documents */
  create?: InputMaybe<Array<SubscriberCreateInput>>;
  /** Delete multiple Subscriber documents */
  delete?: InputMaybe<Array<SubscriberWhereUniqueInput>>;
  /** Disconnect multiple Subscriber documents */
  disconnect?: InputMaybe<Array<SubscriberWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Subscriber documents */
  set?: InputMaybe<Array<SubscriberWhereUniqueInput>>;
  /** Update multiple Subscriber documents */
  update?: InputMaybe<Array<SubscriberUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Subscriber documents */
  upsert?: InputMaybe<Array<SubscriberUpsertWithNestedWhereUniqueInput>>;
};

export type SubscriberUpdateManyInput = {
  address?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  pictureUrl?: InputMaybe<Scalars['String']>;
};

export type SubscriberUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SubscriberUpdateManyInput;
  /** Document search */
  where: SubscriberWhereInput;
};

export type SubscriberUpdateOneInlineInput = {
  /** Connect existing Subscriber document */
  connect?: InputMaybe<SubscriberWhereUniqueInput>;
  /** Create and connect one Subscriber document */
  create?: InputMaybe<SubscriberCreateInput>;
  /** Delete currently connected Subscriber document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Subscriber document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Subscriber document */
  update?: InputMaybe<SubscriberUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Subscriber document */
  upsert?: InputMaybe<SubscriberUpsertWithNestedWhereUniqueInput>;
};

export type SubscriberUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SubscriberUpdateInput;
  /** Unique document search */
  where: SubscriberWhereUniqueInput;
};

export type SubscriberUpsertInput = {
  /** Create document if it didn't exist */
  create: SubscriberCreateInput;
  /** Update document if it exists */
  update: SubscriberUpdateInput;
};

export type SubscriberUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SubscriberUpsertInput;
  /** Unique document search */
  where: SubscriberWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type SubscriberWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type SubscriberWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscriberWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  address_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  address_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  address_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  address_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: InputMaybe<Scalars['String']>;
  class?: InputMaybe<ClassWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<SubscriberWhereStageInput>;
  documentInStages_none?: InputMaybe<SubscriberWhereStageInput>;
  documentInStages_some?: InputMaybe<SubscriberWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  finances_every?: InputMaybe<FinanceWhereInput>;
  finances_none?: InputMaybe<FinanceWhereInput>;
  finances_some?: InputMaybe<FinanceWhereInput>;
  gradeses_every?: InputMaybe<GradesWhereInput>;
  gradeses_none?: InputMaybe<GradesWhereInput>;
  gradeses_some?: InputMaybe<GradesWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phone_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phone_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: InputMaybe<Scalars['String']>;
  pictureUrl?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  pictureUrl_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  pictureUrl_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  pictureUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pictureUrl_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  pictureUrl_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  pictureUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  pictureUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  pictureUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  pictureUrl_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SubscriberWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscriberWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscriberWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscriberWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SubscriberWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Subscriber record uniquely */
export type SubscriberWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Teacher = Node & {
  __typename?: 'Teacher';
  avatarURL: Scalars['String'];
  bio: Scalars['String'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Teacher>;
  email?: Maybe<Scalars['String']>;
  /** List of Teacher versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  turmas: Array<Class>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type TeacherCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TeacherDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type TeacherHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type TeacherPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TeacherScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TeacherTurmasArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ClassWhereInput>;
};


export type TeacherUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TeacherConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TeacherWhereUniqueInput;
};

/** A connection to a list of items. */
export type TeacherConnection = {
  __typename?: 'TeacherConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TeacherEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TeacherCreateInput = {
  avatarURL: Scalars['String'];
  bio: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  turmas?: InputMaybe<ClassCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TeacherCreateManyInlineInput = {
  /** Connect multiple existing Teacher documents */
  connect?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Create and connect multiple existing Teacher documents */
  create?: InputMaybe<Array<TeacherCreateInput>>;
};

export type TeacherCreateOneInlineInput = {
  /** Connect one existing Teacher document */
  connect?: InputMaybe<TeacherWhereUniqueInput>;
  /** Create and connect one Teacher document */
  create?: InputMaybe<TeacherCreateInput>;
};

/** An edge in a connection. */
export type TeacherEdge = {
  __typename?: 'TeacherEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Teacher;
};

/** Identifies documents */
export type TeacherManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TeacherWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  avatarURL?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  avatarURL_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  avatarURL_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  avatarURL_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  avatarURL_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  avatarURL_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  avatarURL_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  avatarURL_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  avatarURL_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  avatarURL_starts_with?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  bio_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TeacherWhereStageInput>;
  documentInStages_none?: InputMaybe<TeacherWhereStageInput>;
  documentInStages_some?: InputMaybe<TeacherWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  turmas_every?: InputMaybe<ClassWhereInput>;
  turmas_none?: InputMaybe<ClassWhereInput>;
  turmas_some?: InputMaybe<ClassWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TeacherOrderByInput {
  AvatarUrlAsc = 'avatarURL_ASC',
  AvatarUrlDesc = 'avatarURL_DESC',
  BioAsc = 'bio_ASC',
  BioDesc = 'bio_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TeacherUpdateInput = {
  avatarURL?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  turmas?: InputMaybe<ClassUpdateManyInlineInput>;
};

export type TeacherUpdateManyInlineInput = {
  /** Connect multiple existing Teacher documents */
  connect?: InputMaybe<Array<TeacherConnectInput>>;
  /** Create and connect multiple Teacher documents */
  create?: InputMaybe<Array<TeacherCreateInput>>;
  /** Delete multiple Teacher documents */
  delete?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Disconnect multiple Teacher documents */
  disconnect?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Teacher documents */
  set?: InputMaybe<Array<TeacherWhereUniqueInput>>;
  /** Update multiple Teacher documents */
  update?: InputMaybe<Array<TeacherUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Teacher documents */
  upsert?: InputMaybe<Array<TeacherUpsertWithNestedWhereUniqueInput>>;
};

export type TeacherUpdateManyInput = {
  avatarURL?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type TeacherUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TeacherUpdateManyInput;
  /** Document search */
  where: TeacherWhereInput;
};

export type TeacherUpdateOneInlineInput = {
  /** Connect existing Teacher document */
  connect?: InputMaybe<TeacherWhereUniqueInput>;
  /** Create and connect one Teacher document */
  create?: InputMaybe<TeacherCreateInput>;
  /** Delete currently connected Teacher document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Teacher document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Teacher document */
  update?: InputMaybe<TeacherUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Teacher document */
  upsert?: InputMaybe<TeacherUpsertWithNestedWhereUniqueInput>;
};

export type TeacherUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TeacherUpdateInput;
  /** Unique document search */
  where: TeacherWhereUniqueInput;
};

export type TeacherUpsertInput = {
  /** Create document if it didn't exist */
  create: TeacherCreateInput;
  /** Update document if it exists */
  update: TeacherUpdateInput;
};

export type TeacherUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TeacherUpsertInput;
  /** Unique document search */
  where: TeacherWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TeacherWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type TeacherWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TeacherWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TeacherWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  avatarURL?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  avatarURL_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  avatarURL_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  avatarURL_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  avatarURL_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  avatarURL_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  avatarURL_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  avatarURL_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  avatarURL_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  avatarURL_starts_with?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  bio_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<TeacherWhereStageInput>;
  documentInStages_none?: InputMaybe<TeacherWhereStageInput>;
  documentInStages_some?: InputMaybe<TeacherWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  turmas_every?: InputMaybe<ClassWhereInput>;
  turmas_none?: InputMaybe<ClassWhereInput>;
  turmas_some?: InputMaybe<ClassWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TeacherWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TeacherWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TeacherWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TeacherWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TeacherWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Teacher record uniquely */
export type TeacherWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type TurmaTeacher = Teacher;

export type TurmaTeacherConnectInput = {
  Teacher?: InputMaybe<TeacherConnectInput>;
};

export type TurmaTeacherCreateInput = {
  Teacher?: InputMaybe<TeacherCreateInput>;
};

export type TurmaTeacherCreateManyInlineInput = {
  /** Connect multiple existing TurmaTeacher documents */
  connect?: InputMaybe<Array<TurmaTeacherWhereUniqueInput>>;
  /** Create and connect multiple existing TurmaTeacher documents */
  create?: InputMaybe<Array<TurmaTeacherCreateInput>>;
};

export type TurmaTeacherCreateOneInlineInput = {
  /** Connect one existing TurmaTeacher document */
  connect?: InputMaybe<TurmaTeacherWhereUniqueInput>;
  /** Create and connect one TurmaTeacher document */
  create?: InputMaybe<TurmaTeacherCreateInput>;
};

export type TurmaTeacherUpdateInput = {
  Teacher?: InputMaybe<TeacherUpdateInput>;
};

export type TurmaTeacherUpdateManyInlineInput = {
  /** Connect multiple existing TurmaTeacher documents */
  connect?: InputMaybe<Array<TurmaTeacherConnectInput>>;
  /** Create and connect multiple TurmaTeacher documents */
  create?: InputMaybe<Array<TurmaTeacherCreateInput>>;
  /** Delete multiple TurmaTeacher documents */
  delete?: InputMaybe<Array<TurmaTeacherWhereUniqueInput>>;
  /** Disconnect multiple TurmaTeacher documents */
  disconnect?: InputMaybe<Array<TurmaTeacherWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TurmaTeacher documents */
  set?: InputMaybe<Array<TurmaTeacherWhereUniqueInput>>;
  /** Update multiple TurmaTeacher documents */
  update?: InputMaybe<Array<TurmaTeacherUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TurmaTeacher documents */
  upsert?: InputMaybe<Array<TurmaTeacherUpsertWithNestedWhereUniqueInput>>;
};

export type TurmaTeacherUpdateManyWithNestedWhereInput = {
  Teacher?: InputMaybe<TeacherUpdateManyWithNestedWhereInput>;
};

export type TurmaTeacherUpdateOneInlineInput = {
  /** Connect existing TurmaTeacher document */
  connect?: InputMaybe<TurmaTeacherWhereUniqueInput>;
  /** Create and connect one TurmaTeacher document */
  create?: InputMaybe<TurmaTeacherCreateInput>;
  /** Delete currently connected TurmaTeacher document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected TurmaTeacher document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single TurmaTeacher document */
  update?: InputMaybe<TurmaTeacherUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TurmaTeacher document */
  upsert?: InputMaybe<TurmaTeacherUpsertWithNestedWhereUniqueInput>;
};

export type TurmaTeacherUpdateWithNestedWhereUniqueInput = {
  Teacher?: InputMaybe<TeacherUpdateWithNestedWhereUniqueInput>;
};

export type TurmaTeacherUpsertWithNestedWhereUniqueInput = {
  Teacher?: InputMaybe<TeacherUpsertWithNestedWhereUniqueInput>;
};

export type TurmaTeacherWhereInput = {
  Teacher?: InputMaybe<TeacherWhereInput>;
};

export type TurmaTeacherWhereUniqueInput = {
  Teacher?: InputMaybe<TeacherWhereUniqueInput>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Week = {
  __typename?: 'Week';
  fourthReview?: Maybe<Scalars['Int']>;
  /** The unique identifier */
  id: Scalars['ID'];
  primaryReview?: Maybe<Scalars['Int']>;
  secondReview?: Maybe<Scalars['Int']>;
  /** System stage field */
  stage: Stage;
  thirdReview?: Maybe<Scalars['Int']>;
};

export type WeekConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: WeekWhereUniqueInput;
};

/** A connection to a list of items. */
export type WeekConnection = {
  __typename?: 'WeekConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<WeekEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type WeekCreateInput = {
  fourthReview?: InputMaybe<Scalars['Int']>;
  primaryReview?: InputMaybe<Scalars['Int']>;
  secondReview?: InputMaybe<Scalars['Int']>;
  thirdReview?: InputMaybe<Scalars['Int']>;
};

export type WeekCreateManyInlineInput = {
  /** Create and connect multiple existing Week documents */
  create?: InputMaybe<Array<WeekCreateInput>>;
};

export type WeekCreateOneInlineInput = {
  /** Create and connect one Week document */
  create?: InputMaybe<WeekCreateInput>;
};

export type WeekCreateWithPositionInput = {
  /** Document to create */
  data: WeekCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type WeekEdge = {
  __typename?: 'WeekEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Week;
};

/** Identifies documents */
export type WeekManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WeekWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WeekWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WeekWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  fourthReview?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  fourthReview_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  fourthReview_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  fourthReview_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  fourthReview_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  fourthReview_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  fourthReview_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  fourthReview_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  primaryReview?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  primaryReview_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  primaryReview_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  primaryReview_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  primaryReview_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  primaryReview_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  primaryReview_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  primaryReview_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  secondReview?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  secondReview_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  secondReview_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  secondReview_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  secondReview_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  secondReview_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  secondReview_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  secondReview_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  thirdReview?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  thirdReview_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  thirdReview_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  thirdReview_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  thirdReview_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  thirdReview_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  thirdReview_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  thirdReview_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum WeekOrderByInput {
  FourthReviewAsc = 'fourthReview_ASC',
  FourthReviewDesc = 'fourthReview_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PrimaryReviewAsc = 'primaryReview_ASC',
  PrimaryReviewDesc = 'primaryReview_DESC',
  SecondReviewAsc = 'secondReview_ASC',
  SecondReviewDesc = 'secondReview_DESC',
  ThirdReviewAsc = 'thirdReview_ASC',
  ThirdReviewDesc = 'thirdReview_DESC'
}

export type WeekParent = Grades;

export type WeekParentConnectInput = {
  Grades?: InputMaybe<GradesConnectInput>;
};

export type WeekParentCreateInput = {
  Grades?: InputMaybe<GradesCreateInput>;
};

export type WeekParentCreateManyInlineInput = {
  /** Connect multiple existing WeekParent documents */
  connect?: InputMaybe<Array<WeekParentWhereUniqueInput>>;
  /** Create and connect multiple existing WeekParent documents */
  create?: InputMaybe<Array<WeekParentCreateInput>>;
};

export type WeekParentCreateOneInlineInput = {
  /** Connect one existing WeekParent document */
  connect?: InputMaybe<WeekParentWhereUniqueInput>;
  /** Create and connect one WeekParent document */
  create?: InputMaybe<WeekParentCreateInput>;
};

export type WeekParentUpdateInput = {
  Grades?: InputMaybe<GradesUpdateInput>;
};

export type WeekParentUpdateManyInlineInput = {
  /** Connect multiple existing WeekParent documents */
  connect?: InputMaybe<Array<WeekParentConnectInput>>;
  /** Create and connect multiple WeekParent documents */
  create?: InputMaybe<Array<WeekParentCreateInput>>;
  /** Delete multiple WeekParent documents */
  delete?: InputMaybe<Array<WeekParentWhereUniqueInput>>;
  /** Disconnect multiple WeekParent documents */
  disconnect?: InputMaybe<Array<WeekParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing WeekParent documents */
  set?: InputMaybe<Array<WeekParentWhereUniqueInput>>;
  /** Update multiple WeekParent documents */
  update?: InputMaybe<Array<WeekParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple WeekParent documents */
  upsert?: InputMaybe<Array<WeekParentUpsertWithNestedWhereUniqueInput>>;
};

export type WeekParentUpdateManyWithNestedWhereInput = {
  Grades?: InputMaybe<GradesUpdateManyWithNestedWhereInput>;
};

export type WeekParentUpdateOneInlineInput = {
  /** Connect existing WeekParent document */
  connect?: InputMaybe<WeekParentWhereUniqueInput>;
  /** Create and connect one WeekParent document */
  create?: InputMaybe<WeekParentCreateInput>;
  /** Delete currently connected WeekParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected WeekParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single WeekParent document */
  update?: InputMaybe<WeekParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single WeekParent document */
  upsert?: InputMaybe<WeekParentUpsertWithNestedWhereUniqueInput>;
};

export type WeekParentUpdateWithNestedWhereUniqueInput = {
  Grades?: InputMaybe<GradesUpdateWithNestedWhereUniqueInput>;
};

export type WeekParentUpsertWithNestedWhereUniqueInput = {
  Grades?: InputMaybe<GradesUpsertWithNestedWhereUniqueInput>;
};

export type WeekParentWhereInput = {
  Grades?: InputMaybe<GradesWhereInput>;
};

export type WeekParentWhereUniqueInput = {
  Grades?: InputMaybe<GradesWhereUniqueInput>;
};

export type WeekUpdateInput = {
  fourthReview?: InputMaybe<Scalars['Int']>;
  primaryReview?: InputMaybe<Scalars['Int']>;
  secondReview?: InputMaybe<Scalars['Int']>;
  thirdReview?: InputMaybe<Scalars['Int']>;
};

export type WeekUpdateManyInlineInput = {
  /** Create and connect multiple Week component instances */
  create?: InputMaybe<Array<WeekCreateWithPositionInput>>;
  /** Delete multiple Week documents */
  delete?: InputMaybe<Array<WeekWhereUniqueInput>>;
  /** Update multiple Week component instances */
  update?: InputMaybe<Array<WeekUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Week component instances */
  upsert?: InputMaybe<Array<WeekUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type WeekUpdateManyInput = {
  fourthReview?: InputMaybe<Scalars['Int']>;
  primaryReview?: InputMaybe<Scalars['Int']>;
  secondReview?: InputMaybe<Scalars['Int']>;
  thirdReview?: InputMaybe<Scalars['Int']>;
};

export type WeekUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: WeekUpdateManyInput;
  /** Document search */
  where: WeekWhereInput;
};

export type WeekUpdateOneInlineInput = {
  /** Create and connect one Week document */
  create?: InputMaybe<WeekCreateInput>;
  /** Delete currently connected Week document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Week document */
  update?: InputMaybe<WeekUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Week document */
  upsert?: InputMaybe<WeekUpsertWithNestedWhereUniqueInput>;
};

export type WeekUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<WeekUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: WeekWhereUniqueInput;
};

export type WeekUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: WeekUpdateInput;
  /** Unique document search */
  where: WeekWhereUniqueInput;
};

export type WeekUpsertInput = {
  /** Create document if it didn't exist */
  create: WeekCreateInput;
  /** Update document if it exists */
  update: WeekUpdateInput;
};

export type WeekUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<WeekUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: WeekWhereUniqueInput;
};

export type WeekUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: WeekUpsertInput;
  /** Unique document search */
  where: WeekWhereUniqueInput;
};

/** Identifies documents */
export type WeekWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WeekWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WeekWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WeekWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  fourthReview?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  fourthReview_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  fourthReview_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  fourthReview_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  fourthReview_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  fourthReview_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  fourthReview_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  fourthReview_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  primaryReview?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  primaryReview_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  primaryReview_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  primaryReview_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  primaryReview_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  primaryReview_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  primaryReview_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  primaryReview_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  secondReview?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  secondReview_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  secondReview_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  secondReview_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  secondReview_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  secondReview_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  secondReview_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  secondReview_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  thirdReview?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  thirdReview_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  thirdReview_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  thirdReview_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  thirdReview_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  thirdReview_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  thirdReview_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  thirdReview_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** References Week record uniquely */
export type WeekWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type ClassMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
}>;


export type ClassMutation = { __typename?: 'Mutation', updateClass?: { __typename?: 'Class', id: string, updatedAt: any } | null };

export type CreateAssessmentsMutationVariables = Exact<{
  month?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  create?: InputMaybe<Array<GradesweeklyAssessmentsUnionCreateInput> | GradesweeklyAssessmentsUnionCreateInput>;
  idClass?: InputMaybe<Scalars['ID']>;
  average?: InputMaybe<Scalars['Int']>;
}>;


export type CreateAssessmentsMutation = { __typename?: 'Mutation', createGrades?: { __typename?: 'Grades', id: string, createdAt: any } | null };

export type CreateCallListMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  create?: InputMaybe<Array<FrequencysubscribesUnionCreateInput> | FrequencysubscribesUnionCreateInput>;
}>;


export type CreateCallListMutation = { __typename?: 'Mutation', createFrequency?: { __typename?: 'Frequency', id: string, createdAt: any } | null };

export type CreateClassesMutationVariables = Exact<{
  codeCreate?: InputMaybe<Scalars['String']>;
  nameCreate?: InputMaybe<Scalars['String']>;
  idTeacher?: InputMaybe<Scalars['ID']>;
}>;


export type CreateClassesMutation = { __typename?: 'Mutation', createClass?: { __typename?: 'Class', id: string, code?: string | null, name?: string | null, createdAt: any } | null, publishClass?: { __typename?: 'Class', id: string, name?: string | null, code?: string | null, publishedAt?: any | null } | null };

export type CreateFinancesMutationVariables = Exact<{
  month?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
}>;


export type CreateFinancesMutation = { __typename?: 'Mutation', createFinance?: { __typename?: 'Finance', id: string, month?: string | null, payment?: boolean | null, value?: number | null } | null };

export type DeleteClassesMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type DeleteClassesMutation = { __typename?: 'Mutation', deleteClass?: { __typename?: 'Class', id: string, updatedAt: any } | null };

export type DeleteFrequencyMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type DeleteFrequencyMutation = { __typename?: 'Mutation', deleteFrequency?: { __typename?: 'Frequency', id: string, updatedAt: any } | null };

export type DeleteGradesMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type DeleteGradesMutation = { __typename?: 'Mutation', deleteGrades?: { __typename?: 'Grades', id: string, updatedAt: any } | null };

export type DeleteSubscriberMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type DeleteSubscriberMutation = { __typename?: 'Mutation', deleteSubscriber?: { __typename?: 'Subscriber', id: string, name: string, updatedAt: any } | null };

export type GetAssessmentsQueryVariables = Exact<{
  month_start?: InputMaybe<Scalars['DateTime']>;
  month_end?: InputMaybe<Scalars['DateTime']>;
}>;


export type GetAssessmentsQuery = { __typename?: 'Query', gradeses: Array<{ __typename?: 'Grades', id: string, month?: string | null, average?: number | null, subscriber?: { __typename?: 'Subscriber', email: string, id: string, name: string, phone?: string | null, pictureUrl?: string | null } | null, weeklyAssessments: Array<{ __typename?: 'Week', id: string, primaryReview?: number | null, secondReview?: number | null, thirdReview?: number | null, fourthReview?: number | null }>, class?: { __typename?: 'Class', code?: string | null, id: string, name?: string | null, teacher?: { __typename?: 'Teacher', id: string, email?: string | null, name: string } | null } | null }> };

export type GetClassByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetClassByIdQuery = { __typename?: 'Query', class?: { __typename?: 'Class', code?: string | null, id: string, name?: string | null, subscribers: Array<{ __typename?: 'Subscriber', id: string, name: string, email: string, phone?: string | null, address?: string | null, gradeses: Array<{ __typename?: 'Grades', id: string, month?: string | null, weeklyAssessments: Array<{ __typename?: 'Week', id: string, primaryReview?: number | null, secondReview?: number | null, thirdReview?: number | null, fourthReview?: number | null }> }> }>, frequencies: Array<{ __typename?: 'Frequency', createdAt: any, id: string, subscribes: Array<{ __typename?: 'Presence', id: string, prensente?: boolean | null, subscriber?: { __typename?: 'Subscriber', name: string, id: string } | null }> }>, assessments: Array<{ __typename?: 'Grades', id: string, month?: string | null, average?: number | null, subscriber?: { __typename?: 'Subscriber', email: string, id: string, name: string, phone?: string | null, pictureUrl?: string | null, address?: string | null } | null, weeklyAssessments: Array<{ __typename?: 'Week', id: string, primaryReview?: number | null, secondReview?: number | null, thirdReview?: number | null, fourthReview?: number | null }> }> } | null };

export type GetClassesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClassesQuery = { __typename?: 'Query', classes: Array<{ __typename?: 'Class', code?: string | null, id: string, name?: string | null, subscribers: Array<{ __typename?: 'Subscriber', id: string, name: string, email: string, phone?: string | null, address?: string | null, pictureUrl?: string | null, gradeses: Array<{ __typename?: 'Grades', id: string, month?: string | null, weeklyAssessments: Array<{ __typename?: 'Week', id: string, primaryReview?: number | null, secondReview?: number | null, thirdReview?: number | null, fourthReview?: number | null }> }> }> }> };

export type GetFrequenciesClassByMonthQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  monthStart?: InputMaybe<Scalars['DateTime']>;
  monthEnd?: InputMaybe<Scalars['DateTime']>;
  idClass?: InputMaybe<Scalars['ID']>;
}>;


export type GetFrequenciesClassByMonthQuery = { __typename?: 'Query', frequencies: Array<{ __typename?: 'Frequency', createdAt: any, id: string, subscribes: Array<{ __typename?: 'Presence', id: string, prensente?: boolean | null, subscriber?: { __typename?: 'Subscriber', name: string, id: string } | null }> }> };

export type GetFrequenciesClassQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  idClass?: InputMaybe<Scalars['ID']>;
}>;


export type GetFrequenciesClassQuery = { __typename?: 'Query', frequencies: Array<{ __typename?: 'Frequency', createdAt: any, id: string, subscribes: Array<{ __typename?: 'Presence', id: string, prensente?: boolean | null, subscriber?: { __typename?: 'Subscriber', name: string, id: string } | null }> }> };

export type GetSubscribersDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSubscribersDataQuery = { __typename?: 'Query', subscribers: Array<{ __typename?: 'Subscriber', id: string, name: string, email: string, pictureUrl?: string | null, phone?: string | null, address?: string | null, class?: { __typename?: 'Class', code?: string | null, id: string, name?: string | null } | null, finances: Array<{ __typename?: 'Finance', id: string, month?: string | null, payment?: boolean | null, value?: number | null }>, gradeses: Array<{ __typename?: 'Grades', id: string, month?: string | null, subscriber?: { __typename?: 'Subscriber', id: string, name: string, email: string, phone?: string | null, pictureUrl?: string | null } | null, weeklyAssessments: Array<{ __typename?: 'Week', id: string, primaryReview?: number | null, secondReview?: number | null, thirdReview?: number | null, fourthReview?: number | null }> }> }> };

export type GetSubscriberLoginQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;


export type GetSubscriberLoginQuery = { __typename?: 'Query', values?: { __typename?: 'Subscriber', email: string, id: string, name: string, pictureUrl?: string | null, phone?: string | null, address?: string | null, class?: { __typename?: 'Class', id: string, code?: string | null } | null, gradeses: Array<{ __typename?: 'Grades', id: string, month?: string | null, weeklyAssessments: Array<{ __typename?: 'Week', id: string, fourthReview?: number | null, primaryReview?: number | null, secondReview?: number | null, thirdReview?: number | null }> }>, finances: Array<{ __typename?: 'Finance', id: string, month?: string | null, payment?: boolean | null, value?: number | null }> } | null };

export type GetTeacherQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;


export type GetTeacherQuery = { __typename?: 'Query', teacher?: { __typename?: 'Teacher', email?: string | null, id: string, name: string, avatarURL: string, bio: string } | null };

export type GetSubscriberByClassQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetSubscriberByClassQuery = { __typename?: 'Query', subscribers: Array<{ __typename?: 'Subscriber', id: string, name: string, email: string }> };

export type RegisterSubscriberMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  pictureUrl?: InputMaybe<Scalars['String']>;
}>;


export type RegisterSubscriberMutation = { __typename?: 'Mutation', createSubscriber?: { __typename?: 'Subscriber', id: string, name: string, phone?: string | null, pictureUrl?: string | null, email: string, stage: Stage } | null, publishSubscriber?: { __typename?: 'Subscriber', id: string } | null };

export type UpdateCallListMutationVariables = Exact<{
  update?: InputMaybe<Array<FrequencysubscribesUnionUpdateWithNestedWhereUniqueAndPositionInput> | FrequencysubscribesUnionUpdateWithNestedWhereUniqueAndPositionInput>;
  id?: InputMaybe<Scalars['ID']>;
}>;


export type UpdateCallListMutation = { __typename?: 'Mutation', updateFrequency?: { __typename?: 'Frequency', id: string, updatedAt: any } | null };

export type UpdateandCreateGradesMutationVariables = Exact<{
  update?: InputMaybe<Array<GradesweeklyAssessmentsUnionUpdateWithNestedWhereUniqueAndPositionInput> | GradesweeklyAssessmentsUnionUpdateWithNestedWhereUniqueAndPositionInput>;
  id?: InputMaybe<Scalars['ID']>;
  create?: InputMaybe<Array<GradesweeklyAssessmentsUnionCreateWithPositionInput> | GradesweeklyAssessmentsUnionCreateWithPositionInput>;
  average?: InputMaybe<Scalars['Int']>;
}>;


export type UpdateandCreateGradesMutation = { __typename?: 'Mutation', updateGrades?: { __typename?: 'Grades', id: string, updatedAt: any } | null };

export type UpdateGradesMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  update?: InputMaybe<Array<GradesweeklyAssessmentsUnionUpdateWithNestedWhereUniqueAndPositionInput> | GradesweeklyAssessmentsUnionUpdateWithNestedWhereUniqueAndPositionInput>;
  average?: InputMaybe<Scalars['Int']>;
}>;


export type UpdateGradesMutation = { __typename?: 'Mutation', updateGrades?: { __typename?: 'Grades', id: string, updatedAt: any } | null };

export type UpdateFinancePaymentMutationVariables = Exact<{
  payment?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
}>;


export type UpdateFinancePaymentMutation = { __typename?: 'Mutation', updateFinance?: { __typename?: 'Finance', id: string, month?: string | null, payment?: boolean | null } | null, publishFinance?: { __typename?: 'Finance', id: string } | null };

export type EditSubscriberMutationVariables = Exact<{
  address?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id1?: InputMaybe<Scalars['ID']>;
}>;


export type EditSubscriberMutation = { __typename?: 'Mutation', updateSubscriber?: { __typename?: 'Subscriber', id: string, updatedAt: any } | null };


export const ClassDocument = gql`
    mutation Class($id: ID = "", $code: String = "", $name: String = "") {
  updateClass(data: {code: $code, name: $name}, where: {id: $id}) {
    id
    updatedAt
  }
}
    `;
export type ClassMutationFn = Apollo.MutationFunction<ClassMutation, ClassMutationVariables>;

/**
 * __useClassMutation__
 *
 * To run a mutation, you first call `useClassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [classMutation, { data, loading, error }] = useClassMutation({
 *   variables: {
 *      id: // value for 'id'
 *      code: // value for 'code'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useClassMutation(baseOptions?: Apollo.MutationHookOptions<ClassMutation, ClassMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ClassMutation, ClassMutationVariables>(ClassDocument, options);
      }
export type ClassMutationHookResult = ReturnType<typeof useClassMutation>;
export type ClassMutationResult = Apollo.MutationResult<ClassMutation>;
export type ClassMutationOptions = Apollo.BaseMutationOptions<ClassMutation, ClassMutationVariables>;
export const CreateAssessmentsDocument = gql`
    mutation CreateAssessments($month: String = "", $id: ID = "", $create: [GradesweeklyAssessmentsUnionCreateInput!] = {}, $idClass: ID = "", $average: Int = 10) {
  createGrades(
    data: {month: $month, subscriber: {connect: {id: $id}}, weeklyAssessments: {create: $create}, class: {connect: {id: $idClass}}, average: $average}
  ) {
    id
    createdAt
  }
}
    `;
export type CreateAssessmentsMutationFn = Apollo.MutationFunction<CreateAssessmentsMutation, CreateAssessmentsMutationVariables>;

/**
 * __useCreateAssessmentsMutation__
 *
 * To run a mutation, you first call `useCreateAssessmentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAssessmentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAssessmentsMutation, { data, loading, error }] = useCreateAssessmentsMutation({
 *   variables: {
 *      month: // value for 'month'
 *      id: // value for 'id'
 *      create: // value for 'create'
 *      idClass: // value for 'idClass'
 *      average: // value for 'average'
 *   },
 * });
 */
export function useCreateAssessmentsMutation(baseOptions?: Apollo.MutationHookOptions<CreateAssessmentsMutation, CreateAssessmentsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAssessmentsMutation, CreateAssessmentsMutationVariables>(CreateAssessmentsDocument, options);
      }
export type CreateAssessmentsMutationHookResult = ReturnType<typeof useCreateAssessmentsMutation>;
export type CreateAssessmentsMutationResult = Apollo.MutationResult<CreateAssessmentsMutation>;
export type CreateAssessmentsMutationOptions = Apollo.BaseMutationOptions<CreateAssessmentsMutation, CreateAssessmentsMutationVariables>;
export const CreateCallListDocument = gql`
    mutation CreateCallList($id: ID = "", $create: [FrequencysubscribesUnionCreateInput!] = {}) {
  createFrequency(
    data: {class: {connect: {id: $id}}, subscribes: {create: $create}}
  ) {
    id
    createdAt
  }
}
    `;
export type CreateCallListMutationFn = Apollo.MutationFunction<CreateCallListMutation, CreateCallListMutationVariables>;

/**
 * __useCreateCallListMutation__
 *
 * To run a mutation, you first call `useCreateCallListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCallListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCallListMutation, { data, loading, error }] = useCreateCallListMutation({
 *   variables: {
 *      id: // value for 'id'
 *      create: // value for 'create'
 *   },
 * });
 */
export function useCreateCallListMutation(baseOptions?: Apollo.MutationHookOptions<CreateCallListMutation, CreateCallListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCallListMutation, CreateCallListMutationVariables>(CreateCallListDocument, options);
      }
export type CreateCallListMutationHookResult = ReturnType<typeof useCreateCallListMutation>;
export type CreateCallListMutationResult = Apollo.MutationResult<CreateCallListMutation>;
export type CreateCallListMutationOptions = Apollo.BaseMutationOptions<CreateCallListMutation, CreateCallListMutationVariables>;
export const CreateClassesDocument = gql`
    mutation CreateClasses($codeCreate: String = "", $nameCreate: String = "", $idTeacher: ID = "") {
  createClass(
    data: {code: $codeCreate, name: $nameCreate, teacher: {connect: {Teacher: {id: $idTeacher}}}}
  ) {
    id
    code
    name
    createdAt
  }
  publishClass(to: PUBLISHED, where: {code: $codeCreate}) {
    id
    name
    code
    publishedAt
  }
}
    `;
export type CreateClassesMutationFn = Apollo.MutationFunction<CreateClassesMutation, CreateClassesMutationVariables>;

/**
 * __useCreateClassesMutation__
 *
 * To run a mutation, you first call `useCreateClassesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClassesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClassesMutation, { data, loading, error }] = useCreateClassesMutation({
 *   variables: {
 *      codeCreate: // value for 'codeCreate'
 *      nameCreate: // value for 'nameCreate'
 *      idTeacher: // value for 'idTeacher'
 *   },
 * });
 */
export function useCreateClassesMutation(baseOptions?: Apollo.MutationHookOptions<CreateClassesMutation, CreateClassesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateClassesMutation, CreateClassesMutationVariables>(CreateClassesDocument, options);
      }
export type CreateClassesMutationHookResult = ReturnType<typeof useCreateClassesMutation>;
export type CreateClassesMutationResult = Apollo.MutationResult<CreateClassesMutation>;
export type CreateClassesMutationOptions = Apollo.BaseMutationOptions<CreateClassesMutation, CreateClassesMutationVariables>;
export const CreateFinancesDocument = gql`
    mutation CreateFinances($month: String = "", $value: Float = 1.5, $id: ID = "") {
  createFinance(
    data: {month: $month, value: $value, subscriber: {connect: {id: $id}}}
  ) {
    id
    month
    payment
    value
  }
}
    `;
export type CreateFinancesMutationFn = Apollo.MutationFunction<CreateFinancesMutation, CreateFinancesMutationVariables>;

/**
 * __useCreateFinancesMutation__
 *
 * To run a mutation, you first call `useCreateFinancesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFinancesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFinancesMutation, { data, loading, error }] = useCreateFinancesMutation({
 *   variables: {
 *      month: // value for 'month'
 *      value: // value for 'value'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCreateFinancesMutation(baseOptions?: Apollo.MutationHookOptions<CreateFinancesMutation, CreateFinancesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFinancesMutation, CreateFinancesMutationVariables>(CreateFinancesDocument, options);
      }
export type CreateFinancesMutationHookResult = ReturnType<typeof useCreateFinancesMutation>;
export type CreateFinancesMutationResult = Apollo.MutationResult<CreateFinancesMutation>;
export type CreateFinancesMutationOptions = Apollo.BaseMutationOptions<CreateFinancesMutation, CreateFinancesMutationVariables>;
export const DeleteClassesDocument = gql`
    mutation DeleteClasses($id: ID = "") {
  deleteClass(where: {id: $id}) {
    id
    updatedAt
  }
}
    `;
export type DeleteClassesMutationFn = Apollo.MutationFunction<DeleteClassesMutation, DeleteClassesMutationVariables>;

/**
 * __useDeleteClassesMutation__
 *
 * To run a mutation, you first call `useDeleteClassesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClassesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClassesMutation, { data, loading, error }] = useDeleteClassesMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteClassesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteClassesMutation, DeleteClassesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteClassesMutation, DeleteClassesMutationVariables>(DeleteClassesDocument, options);
      }
export type DeleteClassesMutationHookResult = ReturnType<typeof useDeleteClassesMutation>;
export type DeleteClassesMutationResult = Apollo.MutationResult<DeleteClassesMutation>;
export type DeleteClassesMutationOptions = Apollo.BaseMutationOptions<DeleteClassesMutation, DeleteClassesMutationVariables>;
export const DeleteFrequencyDocument = gql`
    mutation DeleteFrequency($id: ID = "") {
  deleteFrequency(where: {id: $id}) {
    id
    updatedAt
  }
}
    `;
export type DeleteFrequencyMutationFn = Apollo.MutationFunction<DeleteFrequencyMutation, DeleteFrequencyMutationVariables>;

/**
 * __useDeleteFrequencyMutation__
 *
 * To run a mutation, you first call `useDeleteFrequencyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFrequencyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFrequencyMutation, { data, loading, error }] = useDeleteFrequencyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFrequencyMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFrequencyMutation, DeleteFrequencyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFrequencyMutation, DeleteFrequencyMutationVariables>(DeleteFrequencyDocument, options);
      }
export type DeleteFrequencyMutationHookResult = ReturnType<typeof useDeleteFrequencyMutation>;
export type DeleteFrequencyMutationResult = Apollo.MutationResult<DeleteFrequencyMutation>;
export type DeleteFrequencyMutationOptions = Apollo.BaseMutationOptions<DeleteFrequencyMutation, DeleteFrequencyMutationVariables>;
export const DeleteGradesDocument = gql`
    mutation DeleteGrades($id: ID = "") {
  deleteGrades(where: {id: $id}) {
    id
    updatedAt
  }
}
    `;
export type DeleteGradesMutationFn = Apollo.MutationFunction<DeleteGradesMutation, DeleteGradesMutationVariables>;

/**
 * __useDeleteGradesMutation__
 *
 * To run a mutation, you first call `useDeleteGradesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGradesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGradesMutation, { data, loading, error }] = useDeleteGradesMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGradesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGradesMutation, DeleteGradesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGradesMutation, DeleteGradesMutationVariables>(DeleteGradesDocument, options);
      }
export type DeleteGradesMutationHookResult = ReturnType<typeof useDeleteGradesMutation>;
export type DeleteGradesMutationResult = Apollo.MutationResult<DeleteGradesMutation>;
export type DeleteGradesMutationOptions = Apollo.BaseMutationOptions<DeleteGradesMutation, DeleteGradesMutationVariables>;
export const DeleteSubscriberDocument = gql`
    mutation DeleteSubscriber($id: ID = "") {
  deleteSubscriber(where: {id: $id}) {
    id
    name
    updatedAt
  }
}
    `;
export type DeleteSubscriberMutationFn = Apollo.MutationFunction<DeleteSubscriberMutation, DeleteSubscriberMutationVariables>;

/**
 * __useDeleteSubscriberMutation__
 *
 * To run a mutation, you first call `useDeleteSubscriberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSubscriberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSubscriberMutation, { data, loading, error }] = useDeleteSubscriberMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSubscriberMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSubscriberMutation, DeleteSubscriberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSubscriberMutation, DeleteSubscriberMutationVariables>(DeleteSubscriberDocument, options);
      }
export type DeleteSubscriberMutationHookResult = ReturnType<typeof useDeleteSubscriberMutation>;
export type DeleteSubscriberMutationResult = Apollo.MutationResult<DeleteSubscriberMutation>;
export type DeleteSubscriberMutationOptions = Apollo.BaseMutationOptions<DeleteSubscriberMutation, DeleteSubscriberMutationVariables>;
export const GetAssessmentsDocument = gql`
    query GetAssessments($month_start: DateTime, $month_end: DateTime) {
  gradeses(
    where: {createdAt_gte: $month_start, createdAt_lt: $month_end}
    first: 10
    orderBy: average_DESC
  ) {
    id
    month
    subscriber {
      email
      id
      name
      phone
      pictureUrl
    }
    weeklyAssessments {
      ... on Week {
        id
        primaryReview
        secondReview
        thirdReview
        fourthReview
      }
    }
    class {
      code
      id
      name
      teacher {
        ... on Teacher {
          id
          email
          name
        }
      }
    }
    average
  }
}
    `;

/**
 * __useGetAssessmentsQuery__
 *
 * To run a query within a React component, call `useGetAssessmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAssessmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAssessmentsQuery({
 *   variables: {
 *      month_start: // value for 'month_start'
 *      month_end: // value for 'month_end'
 *   },
 * });
 */
export function useGetAssessmentsQuery(baseOptions?: Apollo.QueryHookOptions<GetAssessmentsQuery, GetAssessmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAssessmentsQuery, GetAssessmentsQueryVariables>(GetAssessmentsDocument, options);
      }
export function useGetAssessmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAssessmentsQuery, GetAssessmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAssessmentsQuery, GetAssessmentsQueryVariables>(GetAssessmentsDocument, options);
        }
export type GetAssessmentsQueryHookResult = ReturnType<typeof useGetAssessmentsQuery>;
export type GetAssessmentsLazyQueryHookResult = ReturnType<typeof useGetAssessmentsLazyQuery>;
export type GetAssessmentsQueryResult = Apollo.QueryResult<GetAssessmentsQuery, GetAssessmentsQueryVariables>;
export const GetClassByIdDocument = gql`
    query GetClassById($id: ID = "") {
  class(where: {id: $id}) {
    code
    id
    name
    subscribers(orderBy: name_ASC) {
      id
      name
      email
      phone
      address
      gradeses {
        id
        month
        weeklyAssessments {
          ... on Week {
            id
            primaryReview
            secondReview
            thirdReview
            fourthReview
          }
        }
      }
    }
    frequencies {
      createdAt
      id
      subscribes {
        ... on Presence {
          id
          prensente
          subscriber {
            name
            id
          }
        }
      }
    }
    assessments {
      id
      month
      average
      subscriber {
        email
        id
        name
        phone
        pictureUrl
        address
      }
      weeklyAssessments {
        ... on Week {
          id
          primaryReview
          secondReview
          thirdReview
          fourthReview
        }
      }
    }
  }
}
    `;

/**
 * __useGetClassByIdQuery__
 *
 * To run a query within a React component, call `useGetClassByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClassByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClassByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetClassByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetClassByIdQuery, GetClassByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClassByIdQuery, GetClassByIdQueryVariables>(GetClassByIdDocument, options);
      }
export function useGetClassByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClassByIdQuery, GetClassByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClassByIdQuery, GetClassByIdQueryVariables>(GetClassByIdDocument, options);
        }
export type GetClassByIdQueryHookResult = ReturnType<typeof useGetClassByIdQuery>;
export type GetClassByIdLazyQueryHookResult = ReturnType<typeof useGetClassByIdLazyQuery>;
export type GetClassByIdQueryResult = Apollo.QueryResult<GetClassByIdQuery, GetClassByIdQueryVariables>;
export const GetClassesDocument = gql`
    query GetClasses {
  classes {
    code
    id
    name
    subscribers {
      id
      name
      email
      phone
      address
      pictureUrl
      gradeses {
        id
        month
        weeklyAssessments {
          ... on Week {
            id
            primaryReview
            secondReview
            thirdReview
            fourthReview
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetClassesQuery__
 *
 * To run a query within a React component, call `useGetClassesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClassesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClassesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClassesQuery(baseOptions?: Apollo.QueryHookOptions<GetClassesQuery, GetClassesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetClassesQuery, GetClassesQueryVariables>(GetClassesDocument, options);
      }
export function useGetClassesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClassesQuery, GetClassesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetClassesQuery, GetClassesQueryVariables>(GetClassesDocument, options);
        }
export type GetClassesQueryHookResult = ReturnType<typeof useGetClassesQuery>;
export type GetClassesLazyQueryHookResult = ReturnType<typeof useGetClassesLazyQuery>;
export type GetClassesQueryResult = Apollo.QueryResult<GetClassesQuery, GetClassesQueryVariables>;
export const GetFrequenciesClassByMonthDocument = gql`
    query GetFrequenciesClassByMonth($id: ID = "", $monthStart: DateTime, $monthEnd: DateTime, $idClass: ID = "") {
  frequencies(
    where: {class: {id: $idClass}, AND: {class: {subscribers_some: {id: $id}}, createdAt_gte: $monthStart, createdAt_lt: $monthEnd}}
  ) {
    createdAt
    id
    subscribes {
      ... on Presence {
        id
        prensente
        subscriber {
          name
          id
        }
      }
    }
  }
}
    `;

/**
 * __useGetFrequenciesClassByMonthQuery__
 *
 * To run a query within a React component, call `useGetFrequenciesClassByMonthQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFrequenciesClassByMonthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFrequenciesClassByMonthQuery({
 *   variables: {
 *      id: // value for 'id'
 *      monthStart: // value for 'monthStart'
 *      monthEnd: // value for 'monthEnd'
 *      idClass: // value for 'idClass'
 *   },
 * });
 */
export function useGetFrequenciesClassByMonthQuery(baseOptions?: Apollo.QueryHookOptions<GetFrequenciesClassByMonthQuery, GetFrequenciesClassByMonthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFrequenciesClassByMonthQuery, GetFrequenciesClassByMonthQueryVariables>(GetFrequenciesClassByMonthDocument, options);
      }
export function useGetFrequenciesClassByMonthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFrequenciesClassByMonthQuery, GetFrequenciesClassByMonthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFrequenciesClassByMonthQuery, GetFrequenciesClassByMonthQueryVariables>(GetFrequenciesClassByMonthDocument, options);
        }
export type GetFrequenciesClassByMonthQueryHookResult = ReturnType<typeof useGetFrequenciesClassByMonthQuery>;
export type GetFrequenciesClassByMonthLazyQueryHookResult = ReturnType<typeof useGetFrequenciesClassByMonthLazyQuery>;
export type GetFrequenciesClassByMonthQueryResult = Apollo.QueryResult<GetFrequenciesClassByMonthQuery, GetFrequenciesClassByMonthQueryVariables>;
export const GetFrequenciesClassDocument = gql`
    query GetFrequenciesClass($id: ID = "", $idClass: ID = "") {
  frequencies(
    where: {class: {id: $idClass}, AND: {class: {subscribers_some: {id: $id}}}}
  ) {
    createdAt
    id
    subscribes {
      ... on Presence {
        id
        prensente
        subscriber {
          name
          id
        }
      }
    }
  }
}
    `;

/**
 * __useGetFrequenciesClassQuery__
 *
 * To run a query within a React component, call `useGetFrequenciesClassQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFrequenciesClassQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFrequenciesClassQuery({
 *   variables: {
 *      id: // value for 'id'
 *      idClass: // value for 'idClass'
 *   },
 * });
 */
export function useGetFrequenciesClassQuery(baseOptions?: Apollo.QueryHookOptions<GetFrequenciesClassQuery, GetFrequenciesClassQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFrequenciesClassQuery, GetFrequenciesClassQueryVariables>(GetFrequenciesClassDocument, options);
      }
export function useGetFrequenciesClassLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFrequenciesClassQuery, GetFrequenciesClassQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFrequenciesClassQuery, GetFrequenciesClassQueryVariables>(GetFrequenciesClassDocument, options);
        }
export type GetFrequenciesClassQueryHookResult = ReturnType<typeof useGetFrequenciesClassQuery>;
export type GetFrequenciesClassLazyQueryHookResult = ReturnType<typeof useGetFrequenciesClassLazyQuery>;
export type GetFrequenciesClassQueryResult = Apollo.QueryResult<GetFrequenciesClassQuery, GetFrequenciesClassQueryVariables>;
export const GetSubscribersDataDocument = gql`
    query GetSubscribersData {
  subscribers {
    class {
      code
      id
      name
    }
    id
    name
    email
    pictureUrl
    phone
    address
    finances {
      id
      month
      payment
      value
    }
    gradeses {
      id
      month
      subscriber {
        id
        name
        email
        phone
        pictureUrl
      }
      weeklyAssessments {
        ... on Week {
          id
          primaryReview
          secondReview
          thirdReview
          fourthReview
        }
      }
    }
  }
}
    `;

/**
 * __useGetSubscribersDataQuery__
 *
 * To run a query within a React component, call `useGetSubscribersDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubscribersDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubscribersDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSubscribersDataQuery(baseOptions?: Apollo.QueryHookOptions<GetSubscribersDataQuery, GetSubscribersDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubscribersDataQuery, GetSubscribersDataQueryVariables>(GetSubscribersDataDocument, options);
      }
export function useGetSubscribersDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubscribersDataQuery, GetSubscribersDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubscribersDataQuery, GetSubscribersDataQueryVariables>(GetSubscribersDataDocument, options);
        }
export type GetSubscribersDataQueryHookResult = ReturnType<typeof useGetSubscribersDataQuery>;
export type GetSubscribersDataLazyQueryHookResult = ReturnType<typeof useGetSubscribersDataLazyQuery>;
export type GetSubscribersDataQueryResult = Apollo.QueryResult<GetSubscribersDataQuery, GetSubscribersDataQueryVariables>;
export const GetSubscriberLoginDocument = gql`
    query GetSubscriberLogin($email: String = "") {
  values: subscriber(where: {email: $email}) {
    email
    id
    name
    pictureUrl
    phone
    address
    class {
      id
      code
    }
    gradeses {
      id
      month
      weeklyAssessments {
        ... on Week {
          id
          fourthReview
          primaryReview
          secondReview
          thirdReview
        }
      }
    }
    finances {
      id
      month
      payment
      value
    }
  }
}
    `;

/**
 * __useGetSubscriberLoginQuery__
 *
 * To run a query within a React component, call `useGetSubscriberLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubscriberLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubscriberLoginQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetSubscriberLoginQuery(baseOptions?: Apollo.QueryHookOptions<GetSubscriberLoginQuery, GetSubscriberLoginQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubscriberLoginQuery, GetSubscriberLoginQueryVariables>(GetSubscriberLoginDocument, options);
      }
export function useGetSubscriberLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubscriberLoginQuery, GetSubscriberLoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubscriberLoginQuery, GetSubscriberLoginQueryVariables>(GetSubscriberLoginDocument, options);
        }
export type GetSubscriberLoginQueryHookResult = ReturnType<typeof useGetSubscriberLoginQuery>;
export type GetSubscriberLoginLazyQueryHookResult = ReturnType<typeof useGetSubscriberLoginLazyQuery>;
export type GetSubscriberLoginQueryResult = Apollo.QueryResult<GetSubscriberLoginQuery, GetSubscriberLoginQueryVariables>;
export const GetTeacherDocument = gql`
    query GetTeacher($email: String = "") {
  teacher(where: {email: $email}) {
    email
    id
    name
    avatarURL
    bio
  }
}
    `;

/**
 * __useGetTeacherQuery__
 *
 * To run a query within a React component, call `useGetTeacherQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeacherQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeacherQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetTeacherQuery(baseOptions?: Apollo.QueryHookOptions<GetTeacherQuery, GetTeacherQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeacherQuery, GetTeacherQueryVariables>(GetTeacherDocument, options);
      }
export function useGetTeacherLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeacherQuery, GetTeacherQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeacherQuery, GetTeacherQueryVariables>(GetTeacherDocument, options);
        }
export type GetTeacherQueryHookResult = ReturnType<typeof useGetTeacherQuery>;
export type GetTeacherLazyQueryHookResult = ReturnType<typeof useGetTeacherLazyQuery>;
export type GetTeacherQueryResult = Apollo.QueryResult<GetTeacherQuery, GetTeacherQueryVariables>;
export const GetSubscriberByClassDocument = gql`
    query GetSubscriberByClass($id: ID = "") {
  subscribers(where: {class: {id: $id}}) {
    id
    name
    email
  }
}
    `;

/**
 * __useGetSubscriberByClassQuery__
 *
 * To run a query within a React component, call `useGetSubscriberByClassQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubscriberByClassQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubscriberByClassQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSubscriberByClassQuery(baseOptions?: Apollo.QueryHookOptions<GetSubscriberByClassQuery, GetSubscriberByClassQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubscriberByClassQuery, GetSubscriberByClassQueryVariables>(GetSubscriberByClassDocument, options);
      }
export function useGetSubscriberByClassLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubscriberByClassQuery, GetSubscriberByClassQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubscriberByClassQuery, GetSubscriberByClassQueryVariables>(GetSubscriberByClassDocument, options);
        }
export type GetSubscriberByClassQueryHookResult = ReturnType<typeof useGetSubscriberByClassQuery>;
export type GetSubscriberByClassLazyQueryHookResult = ReturnType<typeof useGetSubscriberByClassLazyQuery>;
export type GetSubscriberByClassQueryResult = Apollo.QueryResult<GetSubscriberByClassQuery, GetSubscriberByClassQueryVariables>;
export const RegisterSubscriberDocument = gql`
    mutation RegisterSubscriber($email: String = "", $name: String = "", $address: String = "", $phone: String = "", $pictureUrl: String = "") {
  createSubscriber(
    data: {name: $name, email: $email, address: $address, phone: $phone, pictureUrl: $pictureUrl}
  ) {
    id
    name
    phone
    pictureUrl
    email
    stage
  }
  publishSubscriber(where: {email: $email}) {
    id
  }
}
    `;
export type RegisterSubscriberMutationFn = Apollo.MutationFunction<RegisterSubscriberMutation, RegisterSubscriberMutationVariables>;

/**
 * __useRegisterSubscriberMutation__
 *
 * To run a mutation, you first call `useRegisterSubscriberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterSubscriberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerSubscriberMutation, { data, loading, error }] = useRegisterSubscriberMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      address: // value for 'address'
 *      phone: // value for 'phone'
 *      pictureUrl: // value for 'pictureUrl'
 *   },
 * });
 */
export function useRegisterSubscriberMutation(baseOptions?: Apollo.MutationHookOptions<RegisterSubscriberMutation, RegisterSubscriberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterSubscriberMutation, RegisterSubscriberMutationVariables>(RegisterSubscriberDocument, options);
      }
export type RegisterSubscriberMutationHookResult = ReturnType<typeof useRegisterSubscriberMutation>;
export type RegisterSubscriberMutationResult = Apollo.MutationResult<RegisterSubscriberMutation>;
export type RegisterSubscriberMutationOptions = Apollo.BaseMutationOptions<RegisterSubscriberMutation, RegisterSubscriberMutationVariables>;
export const UpdateCallListDocument = gql`
    mutation UpdateCallList($update: [FrequencysubscribesUnionUpdateWithNestedWhereUniqueAndPositionInput!] = {}, $id: ID = "") {
  updateFrequency(data: {subscribes: {update: $update}}, where: {id: $id}) {
    id
    updatedAt
  }
}
    `;
export type UpdateCallListMutationFn = Apollo.MutationFunction<UpdateCallListMutation, UpdateCallListMutationVariables>;

/**
 * __useUpdateCallListMutation__
 *
 * To run a mutation, you first call `useUpdateCallListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCallListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCallListMutation, { data, loading, error }] = useUpdateCallListMutation({
 *   variables: {
 *      update: // value for 'update'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateCallListMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCallListMutation, UpdateCallListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCallListMutation, UpdateCallListMutationVariables>(UpdateCallListDocument, options);
      }
export type UpdateCallListMutationHookResult = ReturnType<typeof useUpdateCallListMutation>;
export type UpdateCallListMutationResult = Apollo.MutationResult<UpdateCallListMutation>;
export type UpdateCallListMutationOptions = Apollo.BaseMutationOptions<UpdateCallListMutation, UpdateCallListMutationVariables>;
export const UpdateandCreateGradesDocument = gql`
    mutation UpdateandCreateGrades($update: [GradesweeklyAssessmentsUnionUpdateWithNestedWhereUniqueAndPositionInput!] = {}, $id: ID = "", $create: [GradesweeklyAssessmentsUnionCreateWithPositionInput!] = {}, $average: Int = 10) {
  updateGrades(
    data: {weeklyAssessments: {update: $update, create: $create}, average: $average}
    where: {id: $id}
  ) {
    id
    updatedAt
  }
}
    `;
export type UpdateandCreateGradesMutationFn = Apollo.MutationFunction<UpdateandCreateGradesMutation, UpdateandCreateGradesMutationVariables>;

/**
 * __useUpdateandCreateGradesMutation__
 *
 * To run a mutation, you first call `useUpdateandCreateGradesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateandCreateGradesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateandCreateGradesMutation, { data, loading, error }] = useUpdateandCreateGradesMutation({
 *   variables: {
 *      update: // value for 'update'
 *      id: // value for 'id'
 *      create: // value for 'create'
 *      average: // value for 'average'
 *   },
 * });
 */
export function useUpdateandCreateGradesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateandCreateGradesMutation, UpdateandCreateGradesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateandCreateGradesMutation, UpdateandCreateGradesMutationVariables>(UpdateandCreateGradesDocument, options);
      }
export type UpdateandCreateGradesMutationHookResult = ReturnType<typeof useUpdateandCreateGradesMutation>;
export type UpdateandCreateGradesMutationResult = Apollo.MutationResult<UpdateandCreateGradesMutation>;
export type UpdateandCreateGradesMutationOptions = Apollo.BaseMutationOptions<UpdateandCreateGradesMutation, UpdateandCreateGradesMutationVariables>;
export const UpdateGradesDocument = gql`
    mutation UpdateGrades($id: ID = "", $update: [GradesweeklyAssessmentsUnionUpdateWithNestedWhereUniqueAndPositionInput!] = {}, $average: Int = 0) {
  updateGrades(
    data: {weeklyAssessments: {update: $update}, average: $average}
    where: {id: $id}
  ) {
    id
    updatedAt
  }
}
    `;
export type UpdateGradesMutationFn = Apollo.MutationFunction<UpdateGradesMutation, UpdateGradesMutationVariables>;

/**
 * __useUpdateGradesMutation__
 *
 * To run a mutation, you first call `useUpdateGradesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGradesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGradesMutation, { data, loading, error }] = useUpdateGradesMutation({
 *   variables: {
 *      id: // value for 'id'
 *      update: // value for 'update'
 *      average: // value for 'average'
 *   },
 * });
 */
export function useUpdateGradesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGradesMutation, UpdateGradesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGradesMutation, UpdateGradesMutationVariables>(UpdateGradesDocument, options);
      }
export type UpdateGradesMutationHookResult = ReturnType<typeof useUpdateGradesMutation>;
export type UpdateGradesMutationResult = Apollo.MutationResult<UpdateGradesMutation>;
export type UpdateGradesMutationOptions = Apollo.BaseMutationOptions<UpdateGradesMutation, UpdateGradesMutationVariables>;
export const UpdateFinancePaymentDocument = gql`
    mutation UpdateFinancePayment($payment: Boolean = false, $id: ID = "") {
  updateFinance(data: {payment: $payment}, where: {id: $id}) {
    id
    month
    payment
  }
  publishFinance(where: {id: $id}) {
    id
  }
}
    `;
export type UpdateFinancePaymentMutationFn = Apollo.MutationFunction<UpdateFinancePaymentMutation, UpdateFinancePaymentMutationVariables>;

/**
 * __useUpdateFinancePaymentMutation__
 *
 * To run a mutation, you first call `useUpdateFinancePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFinancePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFinancePaymentMutation, { data, loading, error }] = useUpdateFinancePaymentMutation({
 *   variables: {
 *      payment: // value for 'payment'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateFinancePaymentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFinancePaymentMutation, UpdateFinancePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFinancePaymentMutation, UpdateFinancePaymentMutationVariables>(UpdateFinancePaymentDocument, options);
      }
export type UpdateFinancePaymentMutationHookResult = ReturnType<typeof useUpdateFinancePaymentMutation>;
export type UpdateFinancePaymentMutationResult = Apollo.MutationResult<UpdateFinancePaymentMutation>;
export type UpdateFinancePaymentMutationOptions = Apollo.BaseMutationOptions<UpdateFinancePaymentMutation, UpdateFinancePaymentMutationVariables>;
export const EditSubscriberDocument = gql`
    mutation EditSubscriber($address: String = "", $email: String = "", $name: String = "", $phone: String = "", $id: ID = "", $id1: ID = "") {
  updateSubscriber(
    data: {address: $address, email: $email, name: $name, phone: $phone, class: {connect: {id: $id1}}}
    where: {id: $id}
  ) {
    id
    updatedAt
  }
}
    `;
export type EditSubscriberMutationFn = Apollo.MutationFunction<EditSubscriberMutation, EditSubscriberMutationVariables>;

/**
 * __useEditSubscriberMutation__
 *
 * To run a mutation, you first call `useEditSubscriberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditSubscriberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editSubscriberMutation, { data, loading, error }] = useEditSubscriberMutation({
 *   variables: {
 *      address: // value for 'address'
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      phone: // value for 'phone'
 *      id: // value for 'id'
 *      id1: // value for 'id1'
 *   },
 * });
 */
export function useEditSubscriberMutation(baseOptions?: Apollo.MutationHookOptions<EditSubscriberMutation, EditSubscriberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditSubscriberMutation, EditSubscriberMutationVariables>(EditSubscriberDocument, options);
      }
export type EditSubscriberMutationHookResult = ReturnType<typeof useEditSubscriberMutation>;
export type EditSubscriberMutationResult = Apollo.MutationResult<EditSubscriberMutation>;
export type EditSubscriberMutationOptions = Apollo.BaseMutationOptions<EditSubscriberMutation, EditSubscriberMutationVariables>;
export type AggregateKeySpecifier = ('count' | AggregateKeySpecifier)[];
export type AggregateFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetKeySpecifier = ('createdAt' | 'createdBy' | 'documentInStages' | 'fileName' | 'handle' | 'height' | 'history' | 'id' | 'locale' | 'localizations' | 'mimeType' | 'publishedAt' | 'publishedBy' | 'scheduledIn' | 'size' | 'slug' | 'stage' | 'updatedAt' | 'updatedBy' | 'url' | 'width' | AssetKeySpecifier)[];
export type AssetFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	fileName?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	localizations?: FieldPolicy<any> | FieldReadFunction<any>,
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduledIn?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | AssetConnectionKeySpecifier)[];
export type AssetConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssetEdgeKeySpecifier = ('cursor' | 'node' | AssetEdgeKeySpecifier)[];
export type AssetEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchPayloadKeySpecifier = ('count' | BatchPayloadKeySpecifier)[];
export type BatchPayloadFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClassKeySpecifier = ('assessments' | 'code' | 'createdAt' | 'createdBy' | 'documentInStages' | 'frequencies' | 'history' | 'id' | 'name' | 'publishedAt' | 'publishedBy' | 'scheduledIn' | 'stage' | 'subscribers' | 'teacher' | 'updatedAt' | 'updatedBy' | ClassKeySpecifier)[];
export type ClassFieldPolicy = {
	assessments?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	frequencies?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduledIn?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribers?: FieldPolicy<any> | FieldReadFunction<any>,
	teacher?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClassConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | ClassConnectionKeySpecifier)[];
export type ClassConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClassEdgeKeySpecifier = ('cursor' | 'node' | ClassEdgeKeySpecifier)[];
export type ClassEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ColorKeySpecifier = ('css' | 'hex' | 'rgba' | ColorKeySpecifier)[];
export type ColorFieldPolicy = {
	css?: FieldPolicy<any> | FieldReadFunction<any>,
	hex?: FieldPolicy<any> | FieldReadFunction<any>,
	rgba?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DocumentVersionKeySpecifier = ('createdAt' | 'data' | 'id' | 'revision' | 'stage' | DocumentVersionKeySpecifier)[];
export type DocumentVersionFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	revision?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FinanceKeySpecifier = ('createdAt' | 'createdBy' | 'documentInStages' | 'history' | 'id' | 'month' | 'payment' | 'publishedAt' | 'publishedBy' | 'scheduledIn' | 'stage' | 'subscriber' | 'updatedAt' | 'updatedBy' | 'value' | FinanceKeySpecifier)[];
export type FinanceFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	month?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduledIn?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriber?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FinanceConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | FinanceConnectionKeySpecifier)[];
export type FinanceConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FinanceEdgeKeySpecifier = ('cursor' | 'node' | FinanceEdgeKeySpecifier)[];
export type FinanceEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FrequencyKeySpecifier = ('class' | 'createdAt' | 'createdBy' | 'documentInStages' | 'history' | 'id' | 'publishedAt' | 'publishedBy' | 'scheduledIn' | 'stage' | 'subscribes' | 'updatedAt' | 'updatedBy' | FrequencyKeySpecifier)[];
export type FrequencyFieldPolicy = {
	class?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduledIn?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribes?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FrequencyConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | FrequencyConnectionKeySpecifier)[];
export type FrequencyConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FrequencyEdgeKeySpecifier = ('cursor' | 'node' | FrequencyEdgeKeySpecifier)[];
export type FrequencyEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GradesKeySpecifier = ('average' | 'class' | 'createdAt' | 'createdBy' | 'documentInStages' | 'history' | 'id' | 'month' | 'publishedAt' | 'publishedBy' | 'scheduledIn' | 'stage' | 'subscriber' | 'updatedAt' | 'updatedBy' | 'weeklyAssessments' | GradesKeySpecifier)[];
export type GradesFieldPolicy = {
	average?: FieldPolicy<any> | FieldReadFunction<any>,
	class?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	month?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduledIn?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriber?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	weeklyAssessments?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GradesConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | GradesConnectionKeySpecifier)[];
export type GradesConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GradesEdgeKeySpecifier = ('cursor' | 'node' | GradesEdgeKeySpecifier)[];
export type GradesEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LocationKeySpecifier = ('distance' | 'latitude' | 'longitude' | LocationKeySpecifier)[];
export type LocationFieldPolicy = {
	distance?: FieldPolicy<any> | FieldReadFunction<any>,
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createAsset' | 'createClass' | 'createFinance' | 'createFrequency' | 'createGrades' | 'createResponsible' | 'createScheduledRelease' | 'createSubscriber' | 'createTeacher' | 'deleteAsset' | 'deleteClass' | 'deleteFinance' | 'deleteFrequency' | 'deleteGrades' | 'deleteManyAssets' | 'deleteManyAssetsConnection' | 'deleteManyClasses' | 'deleteManyClassesConnection' | 'deleteManyFinances' | 'deleteManyFinancesConnection' | 'deleteManyFrequencies' | 'deleteManyFrequenciesConnection' | 'deleteManyGradeses' | 'deleteManyGradesesConnection' | 'deleteManyResponsibles' | 'deleteManyResponsiblesConnection' | 'deleteManySubscribers' | 'deleteManySubscribersConnection' | 'deleteManyTeachers' | 'deleteManyTeachersConnection' | 'deleteResponsible' | 'deleteScheduledOperation' | 'deleteScheduledRelease' | 'deleteSubscriber' | 'deleteTeacher' | 'publishAsset' | 'publishClass' | 'publishFinance' | 'publishFrequency' | 'publishGrades' | 'publishManyAssets' | 'publishManyAssetsConnection' | 'publishManyClasses' | 'publishManyClassesConnection' | 'publishManyFinances' | 'publishManyFinancesConnection' | 'publishManyFrequencies' | 'publishManyFrequenciesConnection' | 'publishManyGradeses' | 'publishManyGradesesConnection' | 'publishManyResponsibles' | 'publishManyResponsiblesConnection' | 'publishManySubscribers' | 'publishManySubscribersConnection' | 'publishManyTeachers' | 'publishManyTeachersConnection' | 'publishResponsible' | 'publishSubscriber' | 'publishTeacher' | 'schedulePublishAsset' | 'schedulePublishClass' | 'schedulePublishFinance' | 'schedulePublishFrequency' | 'schedulePublishGrades' | 'schedulePublishResponsible' | 'schedulePublishSubscriber' | 'schedulePublishTeacher' | 'scheduleUnpublishAsset' | 'scheduleUnpublishClass' | 'scheduleUnpublishFinance' | 'scheduleUnpublishFrequency' | 'scheduleUnpublishGrades' | 'scheduleUnpublishResponsible' | 'scheduleUnpublishSubscriber' | 'scheduleUnpublishTeacher' | 'unpublishAsset' | 'unpublishClass' | 'unpublishFinance' | 'unpublishFrequency' | 'unpublishGrades' | 'unpublishManyAssets' | 'unpublishManyAssetsConnection' | 'unpublishManyClasses' | 'unpublishManyClassesConnection' | 'unpublishManyFinances' | 'unpublishManyFinancesConnection' | 'unpublishManyFrequencies' | 'unpublishManyFrequenciesConnection' | 'unpublishManyGradeses' | 'unpublishManyGradesesConnection' | 'unpublishManyResponsibles' | 'unpublishManyResponsiblesConnection' | 'unpublishManySubscribers' | 'unpublishManySubscribersConnection' | 'unpublishManyTeachers' | 'unpublishManyTeachersConnection' | 'unpublishResponsible' | 'unpublishSubscriber' | 'unpublishTeacher' | 'updateAsset' | 'updateClass' | 'updateFinance' | 'updateFrequency' | 'updateGrades' | 'updateManyAssets' | 'updateManyAssetsConnection' | 'updateManyClasses' | 'updateManyClassesConnection' | 'updateManyFinances' | 'updateManyFinancesConnection' | 'updateManyFrequencies' | 'updateManyFrequenciesConnection' | 'updateManyGradeses' | 'updateManyGradesesConnection' | 'updateManyResponsibles' | 'updateManyResponsiblesConnection' | 'updateManySubscribers' | 'updateManySubscribersConnection' | 'updateManyTeachers' | 'updateManyTeachersConnection' | 'updateResponsible' | 'updateScheduledRelease' | 'updateSubscriber' | 'updateTeacher' | 'upsertAsset' | 'upsertClass' | 'upsertFinance' | 'upsertFrequency' | 'upsertGrades' | 'upsertResponsible' | 'upsertSubscriber' | 'upsertTeacher' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	createClass?: FieldPolicy<any> | FieldReadFunction<any>,
	createFinance?: FieldPolicy<any> | FieldReadFunction<any>,
	createFrequency?: FieldPolicy<any> | FieldReadFunction<any>,
	createGrades?: FieldPolicy<any> | FieldReadFunction<any>,
	createResponsible?: FieldPolicy<any> | FieldReadFunction<any>,
	createScheduledRelease?: FieldPolicy<any> | FieldReadFunction<any>,
	createSubscriber?: FieldPolicy<any> | FieldReadFunction<any>,
	createTeacher?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteClass?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFinance?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFrequency?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteGrades?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyAssets?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyAssetsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyClasses?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyClassesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyFinances?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyFinancesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyFrequencies?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyFrequenciesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyGradeses?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyGradesesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyResponsibles?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyResponsiblesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManySubscribers?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManySubscribersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyTeachers?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyTeachersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteResponsible?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteScheduledOperation?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteScheduledRelease?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteSubscriber?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTeacher?: FieldPolicy<any> | FieldReadFunction<any>,
	publishAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	publishClass?: FieldPolicy<any> | FieldReadFunction<any>,
	publishFinance?: FieldPolicy<any> | FieldReadFunction<any>,
	publishFrequency?: FieldPolicy<any> | FieldReadFunction<any>,
	publishGrades?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyAssets?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyAssetsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyClasses?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyClassesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyFinances?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyFinancesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyFrequencies?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyFrequenciesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyGradeses?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyGradesesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyResponsibles?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyResponsiblesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManySubscribers?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManySubscribersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyTeachers?: FieldPolicy<any> | FieldReadFunction<any>,
	publishManyTeachersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	publishResponsible?: FieldPolicy<any> | FieldReadFunction<any>,
	publishSubscriber?: FieldPolicy<any> | FieldReadFunction<any>,
	publishTeacher?: FieldPolicy<any> | FieldReadFunction<any>,
	schedulePublishAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	schedulePublishClass?: FieldPolicy<any> | FieldReadFunction<any>,
	schedulePublishFinance?: FieldPolicy<any> | FieldReadFunction<any>,
	schedulePublishFrequency?: FieldPolicy<any> | FieldReadFunction<any>,
	schedulePublishGrades?: FieldPolicy<any> | FieldReadFunction<any>,
	schedulePublishResponsible?: FieldPolicy<any> | FieldReadFunction<any>,
	schedulePublishSubscriber?: FieldPolicy<any> | FieldReadFunction<any>,
	schedulePublishTeacher?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduleUnpublishAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduleUnpublishClass?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduleUnpublishFinance?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduleUnpublishFrequency?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduleUnpublishGrades?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduleUnpublishResponsible?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduleUnpublishSubscriber?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduleUnpublishTeacher?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishClass?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishFinance?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishFrequency?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishGrades?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyAssets?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyAssetsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyClasses?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyClassesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyFinances?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyFinancesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyFrequencies?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyFrequenciesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyGradeses?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyGradesesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyResponsibles?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyResponsiblesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManySubscribers?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManySubscribersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyTeachers?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishManyTeachersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishResponsible?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishSubscriber?: FieldPolicy<any> | FieldReadFunction<any>,
	unpublishTeacher?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	updateClass?: FieldPolicy<any> | FieldReadFunction<any>,
	updateFinance?: FieldPolicy<any> | FieldReadFunction<any>,
	updateFrequency?: FieldPolicy<any> | FieldReadFunction<any>,
	updateGrades?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyAssets?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyAssetsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyClasses?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyClassesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyFinances?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyFinancesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyFrequencies?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyFrequenciesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyGradeses?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyGradesesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyResponsibles?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyResponsiblesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManySubscribers?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManySubscribersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyTeachers?: FieldPolicy<any> | FieldReadFunction<any>,
	updateManyTeachersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateResponsible?: FieldPolicy<any> | FieldReadFunction<any>,
	updateScheduledRelease?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSubscriber?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTeacher?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertAsset?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertClass?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertFinance?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertFrequency?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertGrades?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertResponsible?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertSubscriber?: FieldPolicy<any> | FieldReadFunction<any>,
	upsertTeacher?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | 'stage' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'pageSize' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	pageSize?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PresenceKeySpecifier = ('id' | 'prensente' | 'stage' | 'subscriber' | PresenceKeySpecifier)[];
export type PresenceFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	prensente?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriber?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PresenceConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | PresenceConnectionKeySpecifier)[];
export type PresenceConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PresenceEdgeKeySpecifier = ('cursor' | 'node' | PresenceEdgeKeySpecifier)[];
export type PresenceEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('asset' | 'assetVersion' | 'assets' | 'assetsConnection' | 'class' | 'classVersion' | 'classes' | 'classesConnection' | 'finance' | 'financeVersion' | 'finances' | 'financesConnection' | 'frequencies' | 'frequenciesConnection' | 'frequency' | 'frequencyVersion' | 'grades' | 'gradesVersion' | 'gradeses' | 'gradesesConnection' | 'node' | 'responsible' | 'responsibleVersion' | 'responsibles' | 'responsiblesConnection' | 'scheduledOperation' | 'scheduledOperations' | 'scheduledOperationsConnection' | 'scheduledRelease' | 'scheduledReleases' | 'scheduledReleasesConnection' | 'subscriber' | 'subscriberVersion' | 'subscribers' | 'subscribersConnection' | 'teacher' | 'teacherVersion' | 'teachers' | 'teachersConnection' | 'user' | 'users' | 'usersConnection' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	asset?: FieldPolicy<any> | FieldReadFunction<any>,
	assetVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	assets?: FieldPolicy<any> | FieldReadFunction<any>,
	assetsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	class?: FieldPolicy<any> | FieldReadFunction<any>,
	classVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	classes?: FieldPolicy<any> | FieldReadFunction<any>,
	classesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	finance?: FieldPolicy<any> | FieldReadFunction<any>,
	financeVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	finances?: FieldPolicy<any> | FieldReadFunction<any>,
	financesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	frequencies?: FieldPolicy<any> | FieldReadFunction<any>,
	frequenciesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	frequency?: FieldPolicy<any> | FieldReadFunction<any>,
	frequencyVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	grades?: FieldPolicy<any> | FieldReadFunction<any>,
	gradesVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	gradeses?: FieldPolicy<any> | FieldReadFunction<any>,
	gradesesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	responsible?: FieldPolicy<any> | FieldReadFunction<any>,
	responsibleVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	responsibles?: FieldPolicy<any> | FieldReadFunction<any>,
	responsiblesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduledOperation?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduledOperations?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduledOperationsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduledRelease?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduledReleases?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduledReleasesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriber?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriberVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribers?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	teacher?: FieldPolicy<any> | FieldReadFunction<any>,
	teacherVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	teachers?: FieldPolicy<any> | FieldReadFunction<any>,
	teachersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	usersConnection?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RGBAKeySpecifier = ('a' | 'b' | 'g' | 'r' | RGBAKeySpecifier)[];
export type RGBAFieldPolicy = {
	a?: FieldPolicy<any> | FieldReadFunction<any>,
	b?: FieldPolicy<any> | FieldReadFunction<any>,
	g?: FieldPolicy<any> | FieldReadFunction<any>,
	r?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResponsibleKeySpecifier = ('createdAt' | 'createdBy' | 'documentInStages' | 'email' | 'grades' | 'history' | 'id' | 'name' | 'payment' | 'pictureUrl' | 'publishedAt' | 'publishedBy' | 'scheduledIn' | 'stage' | 'subscriber' | 'updatedAt' | 'updatedBy' | ResponsibleKeySpecifier)[];
export type ResponsibleFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	grades?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	pictureUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduledIn?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriber?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResponsibleConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | ResponsibleConnectionKeySpecifier)[];
export type ResponsibleConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResponsibleEdgeKeySpecifier = ('cursor' | 'node' | ResponsibleEdgeKeySpecifier)[];
export type ResponsibleEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RichTextKeySpecifier = ('html' | 'markdown' | 'raw' | 'text' | RichTextKeySpecifier)[];
export type RichTextFieldPolicy = {
	html?: FieldPolicy<any> | FieldReadFunction<any>,
	markdown?: FieldPolicy<any> | FieldReadFunction<any>,
	raw?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScheduledOperationKeySpecifier = ('affectedDocuments' | 'createdAt' | 'createdBy' | 'description' | 'documentInStages' | 'errorMessage' | 'id' | 'publishedAt' | 'publishedBy' | 'rawPayload' | 'release' | 'stage' | 'status' | 'updatedAt' | 'updatedBy' | ScheduledOperationKeySpecifier)[];
export type ScheduledOperationFieldPolicy = {
	affectedDocuments?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	errorMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	rawPayload?: FieldPolicy<any> | FieldReadFunction<any>,
	release?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScheduledOperationConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | ScheduledOperationConnectionKeySpecifier)[];
export type ScheduledOperationConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScheduledOperationEdgeKeySpecifier = ('cursor' | 'node' | ScheduledOperationEdgeKeySpecifier)[];
export type ScheduledOperationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScheduledReleaseKeySpecifier = ('createdAt' | 'createdBy' | 'description' | 'documentInStages' | 'errorMessage' | 'id' | 'isActive' | 'isImplicit' | 'operations' | 'publishedAt' | 'publishedBy' | 'releaseAt' | 'stage' | 'status' | 'title' | 'updatedAt' | 'updatedBy' | ScheduledReleaseKeySpecifier)[];
export type ScheduledReleaseFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	errorMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	isImplicit?: FieldPolicy<any> | FieldReadFunction<any>,
	operations?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	releaseAt?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScheduledReleaseConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | ScheduledReleaseConnectionKeySpecifier)[];
export type ScheduledReleaseConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScheduledReleaseEdgeKeySpecifier = ('cursor' | 'node' | ScheduledReleaseEdgeKeySpecifier)[];
export type ScheduledReleaseEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriberKeySpecifier = ('address' | 'class' | 'createdAt' | 'createdBy' | 'documentInStages' | 'email' | 'finances' | 'gradeses' | 'history' | 'id' | 'name' | 'phone' | 'pictureUrl' | 'publishedAt' | 'publishedBy' | 'scheduledIn' | 'stage' | 'updatedAt' | 'updatedBy' | SubscriberKeySpecifier)[];
export type SubscriberFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	class?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	finances?: FieldPolicy<any> | FieldReadFunction<any>,
	gradeses?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	pictureUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduledIn?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriberConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | SubscriberConnectionKeySpecifier)[];
export type SubscriberConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriberEdgeKeySpecifier = ('cursor' | 'node' | SubscriberEdgeKeySpecifier)[];
export type SubscriberEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeacherKeySpecifier = ('avatarURL' | 'bio' | 'createdAt' | 'createdBy' | 'documentInStages' | 'email' | 'history' | 'id' | 'name' | 'publishedAt' | 'publishedBy' | 'scheduledIn' | 'stage' | 'turmas' | 'updatedAt' | 'updatedBy' | TeacherKeySpecifier)[];
export type TeacherFieldPolicy = {
	avatarURL?: FieldPolicy<any> | FieldReadFunction<any>,
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduledIn?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	turmas?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeacherConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | TeacherConnectionKeySpecifier)[];
export type TeacherConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeacherEdgeKeySpecifier = ('cursor' | 'node' | TeacherEdgeKeySpecifier)[];
export type TeacherEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('createdAt' | 'documentInStages' | 'id' | 'isActive' | 'kind' | 'name' | 'picture' | 'publishedAt' | 'stage' | 'updatedAt' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	documentInStages?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isActive?: FieldPolicy<any> | FieldReadFunction<any>,
	kind?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	picture?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | UserConnectionKeySpecifier)[];
export type UserConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserEdgeKeySpecifier = ('cursor' | 'node' | UserEdgeKeySpecifier)[];
export type UserEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VersionKeySpecifier = ('createdAt' | 'id' | 'revision' | 'stage' | VersionKeySpecifier)[];
export type VersionFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	revision?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WeekKeySpecifier = ('fourthReview' | 'id' | 'primaryReview' | 'secondReview' | 'stage' | 'thirdReview' | WeekKeySpecifier)[];
export type WeekFieldPolicy = {
	fourthReview?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryReview?: FieldPolicy<any> | FieldReadFunction<any>,
	secondReview?: FieldPolicy<any> | FieldReadFunction<any>,
	stage?: FieldPolicy<any> | FieldReadFunction<any>,
	thirdReview?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WeekConnectionKeySpecifier = ('aggregate' | 'edges' | 'pageInfo' | WeekConnectionKeySpecifier)[];
export type WeekConnectionFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WeekEdgeKeySpecifier = ('cursor' | 'node' | WeekEdgeKeySpecifier)[];
export type WeekEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateKeySpecifier | (() => undefined | AggregateKeySpecifier),
		fields?: AggregateFieldPolicy,
	},
	Asset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetKeySpecifier | (() => undefined | AssetKeySpecifier),
		fields?: AssetFieldPolicy,
	},
	AssetConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetConnectionKeySpecifier | (() => undefined | AssetConnectionKeySpecifier),
		fields?: AssetConnectionFieldPolicy,
	},
	AssetEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssetEdgeKeySpecifier | (() => undefined | AssetEdgeKeySpecifier),
		fields?: AssetEdgeFieldPolicy,
	},
	BatchPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchPayloadKeySpecifier | (() => undefined | BatchPayloadKeySpecifier),
		fields?: BatchPayloadFieldPolicy,
	},
	Class?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClassKeySpecifier | (() => undefined | ClassKeySpecifier),
		fields?: ClassFieldPolicy,
	},
	ClassConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClassConnectionKeySpecifier | (() => undefined | ClassConnectionKeySpecifier),
		fields?: ClassConnectionFieldPolicy,
	},
	ClassEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClassEdgeKeySpecifier | (() => undefined | ClassEdgeKeySpecifier),
		fields?: ClassEdgeFieldPolicy,
	},
	Color?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ColorKeySpecifier | (() => undefined | ColorKeySpecifier),
		fields?: ColorFieldPolicy,
	},
	DocumentVersion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DocumentVersionKeySpecifier | (() => undefined | DocumentVersionKeySpecifier),
		fields?: DocumentVersionFieldPolicy,
	},
	Finance?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FinanceKeySpecifier | (() => undefined | FinanceKeySpecifier),
		fields?: FinanceFieldPolicy,
	},
	FinanceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FinanceConnectionKeySpecifier | (() => undefined | FinanceConnectionKeySpecifier),
		fields?: FinanceConnectionFieldPolicy,
	},
	FinanceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FinanceEdgeKeySpecifier | (() => undefined | FinanceEdgeKeySpecifier),
		fields?: FinanceEdgeFieldPolicy,
	},
	Frequency?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FrequencyKeySpecifier | (() => undefined | FrequencyKeySpecifier),
		fields?: FrequencyFieldPolicy,
	},
	FrequencyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FrequencyConnectionKeySpecifier | (() => undefined | FrequencyConnectionKeySpecifier),
		fields?: FrequencyConnectionFieldPolicy,
	},
	FrequencyEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FrequencyEdgeKeySpecifier | (() => undefined | FrequencyEdgeKeySpecifier),
		fields?: FrequencyEdgeFieldPolicy,
	},
	Grades?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GradesKeySpecifier | (() => undefined | GradesKeySpecifier),
		fields?: GradesFieldPolicy,
	},
	GradesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GradesConnectionKeySpecifier | (() => undefined | GradesConnectionKeySpecifier),
		fields?: GradesConnectionFieldPolicy,
	},
	GradesEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GradesEdgeKeySpecifier | (() => undefined | GradesEdgeKeySpecifier),
		fields?: GradesEdgeFieldPolicy,
	},
	Location?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LocationKeySpecifier | (() => undefined | LocationKeySpecifier),
		fields?: LocationFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Presence?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PresenceKeySpecifier | (() => undefined | PresenceKeySpecifier),
		fields?: PresenceFieldPolicy,
	},
	PresenceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PresenceConnectionKeySpecifier | (() => undefined | PresenceConnectionKeySpecifier),
		fields?: PresenceConnectionFieldPolicy,
	},
	PresenceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PresenceEdgeKeySpecifier | (() => undefined | PresenceEdgeKeySpecifier),
		fields?: PresenceEdgeFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RGBA?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RGBAKeySpecifier | (() => undefined | RGBAKeySpecifier),
		fields?: RGBAFieldPolicy,
	},
	Responsible?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResponsibleKeySpecifier | (() => undefined | ResponsibleKeySpecifier),
		fields?: ResponsibleFieldPolicy,
	},
	ResponsibleConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResponsibleConnectionKeySpecifier | (() => undefined | ResponsibleConnectionKeySpecifier),
		fields?: ResponsibleConnectionFieldPolicy,
	},
	ResponsibleEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResponsibleEdgeKeySpecifier | (() => undefined | ResponsibleEdgeKeySpecifier),
		fields?: ResponsibleEdgeFieldPolicy,
	},
	RichText?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RichTextKeySpecifier | (() => undefined | RichTextKeySpecifier),
		fields?: RichTextFieldPolicy,
	},
	ScheduledOperation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScheduledOperationKeySpecifier | (() => undefined | ScheduledOperationKeySpecifier),
		fields?: ScheduledOperationFieldPolicy,
	},
	ScheduledOperationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScheduledOperationConnectionKeySpecifier | (() => undefined | ScheduledOperationConnectionKeySpecifier),
		fields?: ScheduledOperationConnectionFieldPolicy,
	},
	ScheduledOperationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScheduledOperationEdgeKeySpecifier | (() => undefined | ScheduledOperationEdgeKeySpecifier),
		fields?: ScheduledOperationEdgeFieldPolicy,
	},
	ScheduledRelease?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScheduledReleaseKeySpecifier | (() => undefined | ScheduledReleaseKeySpecifier),
		fields?: ScheduledReleaseFieldPolicy,
	},
	ScheduledReleaseConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScheduledReleaseConnectionKeySpecifier | (() => undefined | ScheduledReleaseConnectionKeySpecifier),
		fields?: ScheduledReleaseConnectionFieldPolicy,
	},
	ScheduledReleaseEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScheduledReleaseEdgeKeySpecifier | (() => undefined | ScheduledReleaseEdgeKeySpecifier),
		fields?: ScheduledReleaseEdgeFieldPolicy,
	},
	Subscriber?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriberKeySpecifier | (() => undefined | SubscriberKeySpecifier),
		fields?: SubscriberFieldPolicy,
	},
	SubscriberConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriberConnectionKeySpecifier | (() => undefined | SubscriberConnectionKeySpecifier),
		fields?: SubscriberConnectionFieldPolicy,
	},
	SubscriberEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriberEdgeKeySpecifier | (() => undefined | SubscriberEdgeKeySpecifier),
		fields?: SubscriberEdgeFieldPolicy,
	},
	Teacher?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeacherKeySpecifier | (() => undefined | TeacherKeySpecifier),
		fields?: TeacherFieldPolicy,
	},
	TeacherConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeacherConnectionKeySpecifier | (() => undefined | TeacherConnectionKeySpecifier),
		fields?: TeacherConnectionFieldPolicy,
	},
	TeacherEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeacherEdgeKeySpecifier | (() => undefined | TeacherEdgeKeySpecifier),
		fields?: TeacherEdgeFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserConnectionKeySpecifier | (() => undefined | UserConnectionKeySpecifier),
		fields?: UserConnectionFieldPolicy,
	},
	UserEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserEdgeKeySpecifier | (() => undefined | UserEdgeKeySpecifier),
		fields?: UserEdgeFieldPolicy,
	},
	Version?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VersionKeySpecifier | (() => undefined | VersionKeySpecifier),
		fields?: VersionFieldPolicy,
	},
	Week?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WeekKeySpecifier | (() => undefined | WeekKeySpecifier),
		fields?: WeekFieldPolicy,
	},
	WeekConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WeekConnectionKeySpecifier | (() => undefined | WeekConnectionKeySpecifier),
		fields?: WeekConnectionFieldPolicy,
	},
	WeekEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WeekEdgeKeySpecifier | (() => undefined | WeekEdgeKeySpecifier),
		fields?: WeekEdgeFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;