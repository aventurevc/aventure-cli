import { A as datetime, O as uuid, k as date, l as array, m as intersection, n as EntityPersonOwnerSchema, o as _enum, p as int, r as EntityTypeSchema, t as DatasourceDataSourceTypeSchema, u as boolean, v as number, w as string, y as object } from "./data-source-type-B2O1SiZK.js";
//#region ../api-schemas/dist/address/association-role.js
/**
* Meaning of an entity or person address association. Domicile is a legal or registered seat and is not evidence of operational presence; dominant is the predominant display location; origin is the founding or historical location.
*
* @openapiSchema AddressAssociationRole
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/addresses
* @endpoint GET /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/people/{personId}/addresses
* @endpoint GET /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint GET /v1/people/{personId}/entities
* @endpoint GET /v1/people/{personId}/entities/{associationId}
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/address/validation
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/addresses
* @endpoint POST /v1/entities/{entityId}/people
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/people/{personId}/addresses
* @endpoint POST /v1/people/{personId}/entities
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint POST /v1/sec/entities/{entityId}/address
* @endpoint PATCH /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint PATCH /v1/people/{personId}/entities/{associationId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint PUT /v1/entities/{entityId}/people/{associationId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint PUT /v1/people/{personId}/entities/{associationId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}/corporate-title
* @endpoint DELETE /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
* @usedBySchema AddressAssociationSchema
* @usedBySchema EntityAddressMutationSchema
* @usedBySchema PersonAddressMutationSchema
* @contractShape address.association-role
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/address/Address.kt
*/
var AddressAssociationRoleSchema = _enum([
	"domicile",
	"dominant",
	"origin"
]);
/**
* One role and effective period for a physical address association
*
* @openapiSchema AddressAssociation
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/addresses
* @endpoint GET /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/people/{personId}/addresses
* @endpoint GET /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint GET /v1/people/{personId}/entities
* @endpoint GET /v1/people/{personId}/entities/{associationId}
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/address/validation
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/addresses
* @endpoint POST /v1/entities/{entityId}/people
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/people/{personId}/addresses
* @endpoint POST /v1/people/{personId}/entities
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint POST /v1/sec/entities/{entityId}/address
* @endpoint PATCH /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint PATCH /v1/people/{personId}/entities/{associationId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint PUT /v1/entities/{entityId}/people/{associationId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint PUT /v1/people/{personId}/entities/{associationId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}/corporate-title
* @endpoint DELETE /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
* @usedBySchema AddressSchema
* @contractShape address.association
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/address/Address.kt
*/
var AddressAssociationSchema = object({
	/** Last known day this role applied */
	endDate: date().nullish(),
	/** Address association row identifier */
	id: int(),
	/** Whether this role is currently relevant */
	isCurrent: boolean(),
	/** Address association role; null means unclassified */
	role: AddressAssociationRoleSchema.nullish(),
	/** First known day this role applied */
	startDate: date().nullish()
});
//#endregion
//#region ../api-schemas/dist/address/city.js
/**
* City reference used inside an address
*
* @openapiSchema AddressCity
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/addresses
* @endpoint GET /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/people/{personId}/addresses
* @endpoint GET /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint GET /v1/people/{personId}/entities
* @endpoint GET /v1/people/{personId}/entities/{associationId}
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/address/validation
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/addresses
* @endpoint POST /v1/entities/{entityId}/people
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/people/{personId}/addresses
* @endpoint POST /v1/people/{personId}/entities
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint POST /v1/sec/entities/{entityId}/address
* @endpoint PATCH /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint PATCH /v1/people/{personId}/entities/{associationId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint PUT /v1/entities/{entityId}/people/{associationId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint PUT /v1/people/{personId}/entities/{associationId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}/corporate-title
* @endpoint DELETE /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
* @usedBySchema AddressSchema
* @contractShape address.city
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/address/AddressCity.kt
*/
var AddressCitySchema = object({
	id: int().nullish(),
	/** City name */
	name: string()
});
//#endregion
//#region ../api-schemas/dist/address/country.js
/**
* Country reference used inside an address
*
* @openapiSchema AddressCountry
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/addresses
* @endpoint GET /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/people/{personId}/addresses
* @endpoint GET /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint GET /v1/people/{personId}/entities
* @endpoint GET /v1/people/{personId}/entities/{associationId}
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/address/validation
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/addresses
* @endpoint POST /v1/entities/{entityId}/people
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/people/{personId}/addresses
* @endpoint POST /v1/people/{personId}/entities
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint POST /v1/sec/entities/{entityId}/address
* @endpoint PATCH /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint PATCH /v1/people/{personId}/entities/{associationId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint PUT /v1/entities/{entityId}/people/{associationId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint PUT /v1/people/{personId}/entities/{associationId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}/corporate-title
* @endpoint DELETE /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
* @usedBySchema AddressSchema
* @contractShape address.country
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/address/AddressCountry.kt
*/
var AddressCountrySchema = object({
	/** Two-letter country code */
	countryCodeChar2: string().nullish(),
	/** Three-letter country code */
	countryCodeChar3: string().nullish(),
	id: int().nullish(),
	/** Country name */
	name: string(),
	unRegion: string().nullish(),
	unSubregion: string().nullish()
});
//#endregion
//#region ../api-schemas/dist/address/state.js
/**
* State or region reference used inside an address
*
* @openapiSchema AddressState
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/addresses
* @endpoint GET /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/people/{personId}/addresses
* @endpoint GET /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint GET /v1/people/{personId}/entities
* @endpoint GET /v1/people/{personId}/entities/{associationId}
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/address/validation
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/addresses
* @endpoint POST /v1/entities/{entityId}/people
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/people/{personId}/addresses
* @endpoint POST /v1/people/{personId}/entities
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint POST /v1/sec/entities/{entityId}/address
* @endpoint PATCH /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint PATCH /v1/people/{personId}/entities/{associationId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint PUT /v1/entities/{entityId}/people/{associationId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint PUT /v1/people/{personId}/entities/{associationId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}/corporate-title
* @endpoint DELETE /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
* @usedBySchema AddressSchema
* @contractShape address.state
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/address/AddressState.kt
*/
var AddressStateSchema = object({
	id: int().nullish(),
	/** State or region name */
	name: string(),
	/** State or region abbreviation */
	stateAbbrev: string().nullish()
});
//#endregion
//#region ../api-schemas/dist/address/address.js
/**
* Canonical address record for entity and person payloads
*
* @openapiSchema Address
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/addresses
* @endpoint GET /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/people/{personId}/addresses
* @endpoint GET /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint GET /v1/people/{personId}/entities
* @endpoint GET /v1/people/{personId}/entities/{associationId}
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/address/validation
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/addresses
* @endpoint POST /v1/entities/{entityId}/people
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/people/{personId}/addresses
* @endpoint POST /v1/people/{personId}/entities
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint POST /v1/sec/entities/{entityId}/address
* @endpoint PATCH /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint PATCH /v1/people/{personId}/entities/{associationId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint PUT /v1/entities/{entityId}/people/{associationId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint PUT /v1/people/{personId}/entities/{associationId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}/corporate-title
* @endpoint DELETE /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
* @usedBySchema AddressValidationResultSchema
* @usedBySchema EntityEnrichmentSchema
* @usedBySchema EntityPersonAssociationSchema
* @usedBySchema PersonEnrichmentSchema
* @usedBySchema PersonGraphCareerContextSchema
* @contractShape address.address
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/address/Address.kt
*/
var AddressSchema = object({
	/** Legacy address row identifier */
	address: int().nullish(),
	addressLine1: string().nullish(),
	addressLine2: string().nullish(),
	/** Role-period associations for this physical address */
	association: array(AddressAssociationSchema).optional(),
	/** City reference */
	city: AddressCitySchema.nullish(),
	/** Country reference */
	country: AddressCountrySchema.nullish(),
	countryAbbrev: string().nullish(),
	createdAt: datetime({ offset: true }).nullish(),
	/** Single-line formatted address */
	fullAddress: string().nullish(),
	/** Address record identifier */
	id: int().nullish(),
	/** Deprecated aggregate compatibility flag; true when any association is current */
	isCurrent: boolean().nullish(),
	/** Deprecated legacy flag marking the headquarters or legal/registered address */
	isHq: boolean().nullish(),
	/** Deprecated legacy flag marking the primary display address */
	isPrimary: boolean().nullish(),
	latitude: number().nullish(),
	longitude: number().nullish(),
	postalCode: string().nullish(),
	/** State or region reference */
	state: AddressStateSchema.nullish(),
	stateAbbrev: string().nullish(),
	street: string().nullish(),
	updatedAt: datetime({ offset: true }).nullish()
});
/**
* @openapiSchema Classification
* @endpoint GET /v1/classifications/catalog
* @endpoint GET /v1/classifications/search
* @endpoint GET /v1/classifications/tags
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/classifications
* @endpoint GET /v1/entities/{entityId}/classifications/suggestions
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/classifications
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/classifications/audit
* @endpoint POST /v1/entities/classifications/audit/fleet
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/{entityId}/classifications/{classificationId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/{entityId}/classifications/{classificationId}
* @endpoint PUT /v1/entities/detail
* @endpoint DELETE /v1/entities/{entityId}/classifications/{classificationId}
* @usedBySchema EntityTagSchema
* @usedBySchema StandardizedClassificationSchema
* @contractShape classification.classification
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/EntityClassification.kt
*/
var ClassificationSchema = object({
	creatable: boolean(),
	isCurrent: boolean().nullish(),
	isPrimary: boolean().nullish(),
	/** Display name. Capped to the standardized taxonomy storage limit because this shared read contract covers NAICS/SIC/ISIC-style classification labels as well as editorial tags. */
	name: string().max(255),
	writable: boolean()
});
/**
* Canonical classification tag projection. Catalog/search responses describe registry tags; entity-classification responses include classificationId plus join state.
*
* @openapiSchema EntityTag
* @endpoint GET /v1/classifications/catalog
* @endpoint GET /v1/classifications/search
* @endpoint GET /v1/classifications/tags
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/classifications
* @endpoint GET /v1/entities/{entityId}/classifications/suggestions
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/classifications
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/{entityId}/classifications/{classificationId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/{entityId}/classifications/{classificationId}
* @endpoint PUT /v1/entities/detail
* @endpoint DELETE /v1/entities/{entityId}/classifications/{classificationId}
* @usedBySchema ClassificationCatalogBucketSchema
* @usedBySchema EntityClassificationSchema
* @usedBySchema EntityClassificationSuggestionSchema
* @usedBySchema PageClassificationSchema
* @usedBySchema PageEntityTagSchema
* @contractShape entity.tag
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/EntityClassification.kt
*/
var EntityTagSchema = intersection(ClassificationSchema, object({
	/** Canonical entity-classification bucket key. Use this as EntityClassificationMutation.type when creating by type plus name; `type` remains the registry wire value for tag search and catalog round-trips. */
	bucket: string().nullish(),
	/** Entity classification join row id for update/delete; present on entity classification responses and null on discovery responses. */
	classificationId: int().nullish(),
	/** Whether this bucket permits creating missing values by type plus name. */
	creatable: boolean(),
	/** Registry tag creation timestamp, not the entity join timestamp. */
	createdAt: datetime({ offset: true }).nullish(),
	/** Classification tag registry id from res_type_ref; use as EntityClassificationMutation.tagId. */
	id: int(),
	/** Current-state flag for this context: registry active flag in discovery, entity join current flag in entity-classification responses. */
	isCurrent: boolean().nullish(),
	/** Entity join primary flag within its bucket; null on catalog/tag discovery. */
	isPrimary: boolean().nullish(),
	/** Name */
	name: string().max(255),
	/** Slug */
	slug: string().regex(/^[a-z0-9_-]+$/).max(255).nullish(),
	/** Canonical tag classification type */
	type: string(),
	/** Registry tag update timestamp; join updates return isCurrent/isPrimary but no join updatedAt. */
	updatedAt: datetime({ offset: true }).nullish(),
	/** Whether this existing tag can be joined through tagId. */
	writable: boolean()
}));
/**
* Canonical standardized classification projection backed by res_classification_ref. Rows are join-existing-only; creatable is false until a taxonomy writer exists.
*
* @openapiSchema StandardizedClassification
* @endpoint GET /v1/classifications/catalog
* @endpoint GET /v1/classifications/search
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/classifications
* @endpoint GET /v1/entities/{entityId}/classifications/suggestions
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/classifications
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/classifications/audit
* @endpoint POST /v1/entities/classifications/audit/fleet
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/{entityId}/classifications/{classificationId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/{entityId}/classifications/{classificationId}
* @endpoint PUT /v1/entities/detail
* @endpoint DELETE /v1/entities/{entityId}/classifications/{classificationId}
* @usedBySchema ClassificationAuditEntrySchema
* @usedBySchema ClassificationCatalogCategorySchema
* @usedBySchema EntityClassificationSchema
* @usedBySchema EntityClassificationSuggestionSchema
* @usedBySchema PageClassificationSchema
* @contractShape standardized.classification
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/StandardizedClassification.kt
*/
var StandardizedClassificationSchema = intersection(ClassificationSchema, object({
	/** Standardized category token. */
	category: string(),
	/** Standardized classification code when present. */
	code: int().nullish(),
	/** Standardized taxonomy rows are join-existing-only. */
	creatable: boolean(),
	/** Registry row creation timestamp. */
	createdAt: datetime({ offset: true }).nullish(),
	/** Entity classification join row id for update/delete; present on entity classification responses and null on discovery responses. */
	entityClassificationId: int().nullish(),
	/** Standardized classification registry id from res_classification_ref; use as EntityClassificationMutation.classificationId. */
	id: int(),
	/** Standardized reference rows are current by definition. */
	isCurrent: boolean().nullish(),
	/** Entity join primary flag within this standardized category. */
	isPrimary: boolean().nullish(),
	/** Hierarchy level when present. */
	level: int().nullish(),
	/** Name */
	name: string().max(255),
	/** Registry row update timestamp. */
	updatedAt: datetime({ offset: true }).nullish(),
	/** Existing standardized rows can be joined through classificationId. */
	writable: boolean()
}));
/**
* Entity classification join rows grouped by bucket; default reads include only current joins, and includeInactive=true adds inactive/historical joins.
*
* @openapiSchema EntityClassification
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/classifications
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/detail
* @usedBySchema EntityEnrichmentSchema
* @contractShape entity.classification
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/EntityClassification.kt
*/
var EntityClassificationSchema = object({
	/** Geographic markets where the entity earns revenue and serves customers (e.g. North America, EMEA, APAC). This is the sales/market footprint classification — NOT the HQ or office location. HQ and office locations belong on the address record (enrichment.address), not this bucket. A London-headquartered company selling globally should have North America and EMEA here, not United Kingdom. */
	geoLocationExposure: array(EntityTagSchema).default([]).optional(),
	/** Industry filter values */
	industry: array(EntityTagSchema).default([]).optional(),
	/** Main product filter values */
	mainProduct: array(EntityTagSchema).default([]).optional(),
	/** Standardized classification joins from res_classification_ref. Rows are join-existing-only and carry category/code metadata. */
	standardizedClassification: array(StandardizedClassificationSchema).default([]).optional(),
	/** Tag filter values */
	tag: array(EntityTagSchema).default([]).optional(),
	/** Type customer filter values */
	typeCustomer: array(EntityTagSchema).default([]).optional(),
	/** Type model filter values */
	typeModel: array(EntityTagSchema).default([]).optional(),
	/** Type ownership filter values */
	typeOwnership: array(EntityTagSchema).default([]).optional(),
	/** Type revenue filter values */
	typeRevenue: array(EntityTagSchema).default([]).optional(),
	/** Type technology used filter values */
	typeTechnologyUsed: array(EntityTagSchema).default([]).optional()
});
//#endregion
//#region ../api-schemas/dist/funding/stage.js
/**
* Canonical inferred equity, entity-type, or Company operating-status stage emitted by the entity fundraise rollup. Transaction classifications such as Debt, IPO, and Acquisition are not entity stages.
*
* @openapiSchema FundingStage
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/fundraise-rounds
* @endpoint GET /v1/entities/detail/investments
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/entities/summary
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint GET /v1/entities/relationships/{relationshipId}
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/relationships
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/fundraise-rounds
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/entities/relationships/join
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PATCH /v1/entities/relationships/{relationshipId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint DELETE /v1/entities/relationships/{relationshipId}
* @usedBySchema EntityComparisonSignalsSchema
* @usedBySchema EntityFundingDetailSchema
* @contractShape funding.stage
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundingStage.kt
*/
var FundingStageSchema = _enum([
	"Angel",
	"Pre-Seed",
	"Seed",
	"Series A",
	"Series B",
	"Series C",
	"Series D",
	"Series E",
	"Series F",
	"Series G",
	"Series H",
	"Series I",
	"Series J",
	"Series K",
	"Series L",
	"Series M",
	"Series N",
	"Series O",
	"Series P",
	"Series Q",
	"Series R",
	"Series S",
	"Series T",
	"Series U",
	"Series V",
	"Series W",
	"Series X",
	"Series Y",
	"Series Z",
	"Investment Firm",
	"Fund",
	"Nonprofit",
	"Government",
	"Public",
	"Acquired",
	"Acquired Subsidiary"
]);
//#endregion
//#region ../api-schemas/dist/entity/funding-detail.js
/**
* Aggregate view of an entity's fundraising activity
*
* @openapiSchema EntityFundingDetail
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/fundraise-rounds
* @endpoint GET /v1/entities/detail/investments
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/entities/summary
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/fundraise-rounds
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
* @usedBySchema EntityEnrichmentSchema
* @usedBySchema EntityFundraiseTransactionEntitySchema
* @contractShape entity.funding-detail
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/EntityFundingDetail.kt
*/
var EntityFundingDetailSchema = object({
	fundingRoundCount: int(),
	investorCount: int(),
	latestValuation: number().nullish(),
	mostRecentAmount: number().nullish(),
	mostRecentDate: date().nullish(),
	stage: FundingStageSchema.nullish(),
	totalRaised: number()
});
/**
* Grouped entity/person text content
*
* @openapiSchema EntityTextBundle
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/people
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/people/duplicate-check
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/people
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/people/duplicate-check
* @endpoint POST /v1/people/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/detail
* @usedBySchema EntityEnrichmentSchema
* @usedBySchema PersonSchema
* @contractShape entity.text-bundle
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/text/TextBundle.kt
*/
var EntityTextBundleSchema = object({
	/** Expanded summary text */
	expanded: string().nullish(),
	/** Generated SEO meta description text */
	generatedDescription: string().nullish(),
	/** Short summary text */
	short: string().nullish()
});
//#endregion
//#region ../api-schemas/dist/datasource/source-metadata.js
/**
* Grouped source/provenance metadata for private v1 response fields
*
* @openapiSchema DatasourceSourceMetadata
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/fundraise-rounds
* @endpoint GET /v1/entities/detail/investments
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/news
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/entities/detail/trending-news
* @endpoint GET /v1/entities/duplicate-check
* @endpoint GET /v1/entities/sitemap-routes
* @endpoint GET /v1/entities/summary
* @endpoint GET /v1/harness/runs
* @endpoint GET /v1/media
* @endpoint GET /v1/news
* @endpoint GET /v1/news/detail
* @endpoint GET /v1/news/duplicate-check
* @endpoint GET /v1/news/recent
* @endpoint GET /v1/news/similar
* @endpoint GET /v1/people
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/news
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/people/duplicate-check
* @endpoint GET /v1/provenance/latest
* @endpoint GET /v1/search/link
* @endpoint GET /v1/addresses/locations/{scope}/{slug}
* @endpoint GET /v1/entities/{entityId}/acquisitions
* @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/{entityId}/urls
* @endpoint GET /v1/entities/{entityId}/urls/{urlId}
* @endpoint GET /v1/entities/{entityId}/urls/all
* @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint GET /v1/entities/relationships/{relationshipId}
* @endpoint GET /v1/harness/runs/{runId}
* @endpoint GET /v1/news/{id}/related-companies
* @endpoint GET /v1/people/{personId}/entities
* @endpoint GET /v1/people/{personId}/entities/{associationId}
* @endpoint GET /v1/people/{personId}/graph
* @endpoint GET /v1/people/{personId}/urls
* @endpoint GET /v1/people/{personId}/urls/{urlId}
* @endpoint GET /v1/people/{personId}/urls/all
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/acquisitions
* @endpoint POST /v1/entities/{entityId}/people
* @endpoint POST /v1/entities/{entityId}/relationships
* @endpoint POST /v1/entities/{entityId}/urls
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/fundraise-rounds
* @endpoint POST /v1/entities/detail/news
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/duplicate-check
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/entities/relationships/join
* @endpoint POST /v1/media/convert
* @endpoint POST /v1/media/entity-logo/import
* @endpoint POST /v1/media/logo-accuracy
* @endpoint POST /v1/media/news-thumbnail/import
* @endpoint POST /v1/media/upload
* @endpoint POST /v1/news
* @endpoint POST /v1/news/detail
* @endpoint POST /v1/news/duplicate-check
* @endpoint POST /v1/people
* @endpoint POST /v1/people/{personId}/entities
* @endpoint POST /v1/people/{personId}/urls
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/people/detail/news
* @endpoint POST /v1/people/duplicate-check
* @endpoint POST /v1/people/natural-search
* @endpoint POST /v1/search/all
* @endpoint POST /v1/sec/entities/{entityId}/exchange-urls
* @endpoint PATCH /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
* @endpoint PATCH /v1/entities/{entityId}/urls/{urlId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PATCH /v1/entities/detail/news/{newsId}
* @endpoint PATCH /v1/entities/relationships/{relationshipId}
* @endpoint PATCH /v1/news/detail
* @endpoint PATCH /v1/people/{personId}/entities/{associationId}
* @endpoint PATCH /v1/people/{personId}/urls/{urlId}
* @endpoint PATCH /v1/people/detail
* @endpoint PATCH /v1/people/detail/news/{newsId}
* @endpoint PUT /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PUT /v1/entities/{entityId}/people/{associationId}
* @endpoint PUT /v1/entities/{entityId}/urls/{urlId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PUT /v1/entities/detail/news/{newsId}
* @endpoint PUT /v1/news/detail
* @endpoint PUT /v1/people/{personId}/entities/{associationId}
* @endpoint PUT /v1/people/{personId}/urls/{urlId}
* @endpoint PUT /v1/people/detail
* @endpoint PUT /v1/people/detail/news/{newsId}
* @endpoint DELETE /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}/corporate-title
* @endpoint DELETE /v1/entities/{entityId}/urls/{urlId}
* @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint DELETE /v1/entities/detail/news/{newsId}
* @endpoint DELETE /v1/entities/relationships/{relationshipId}
* @endpoint DELETE /v1/news/detail
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
* @endpoint DELETE /v1/people/{personId}/urls/{urlId}
* @endpoint DELETE /v1/people/detail/news/{newsId}
* @usedBySchema EntitySchema
* @usedBySchema EntityUrlLinkSchema
* @usedBySchema LogoAccuracySchema
* @usedBySchema MediaUploadSchema
* @usedBySchema NewsDetailSchema
* @usedBySchema NewsSchema
* @usedBySchema PersonSchema
* @contractShape datasource.source-metadata
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/datasource/Provenance.kt
*/
var DatasourceSourceMetadataSchema = object({
	changedAt: datetime({ offset: true }).nullish(),
	dataSourceUpdatedAt: datetime({ offset: true }).nullish(),
	detail: string().nullish(),
	kind: string().nullish(),
	pendingApproval: int().nullish(),
	sourceId: string().nullish(),
	status: string().nullish()
});
//#endregion
//#region ../api-schemas/dist/entity/url-crawl-cdn-provider.js
/**
* CDN or hosting provider fronting a web URL.
*
* @openapiSchema EntityUrlCrawlCdnProvider
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/operating-status/signal
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/urls
* @endpoint GET /v1/entities/{entityId}/urls/{urlId}
* @endpoint GET /v1/entities/{entityId}/urls/all
* @endpoint GET /v1/people/{personId}/entities
* @endpoint GET /v1/people/{personId}/entities/{associationId}
* @endpoint GET /v1/people/{personId}/urls
* @endpoint GET /v1/people/{personId}/urls/{urlId}
* @endpoint GET /v1/people/{personId}/urls/all
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/people
* @endpoint POST /v1/entities/{entityId}/urls
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/people/{personId}/entities
* @endpoint POST /v1/people/{personId}/urls
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint POST /v1/sec/entities/{entityId}/exchange-urls
* @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
* @endpoint PATCH /v1/entities/{entityId}/urls/{urlId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/{personId}/entities/{associationId}
* @endpoint PATCH /v1/people/{personId}/urls/{urlId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/people/{associationId}
* @endpoint PUT /v1/entities/{entityId}/urls/{urlId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/{personId}/entities/{associationId}
* @endpoint PUT /v1/people/{personId}/urls/{urlId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}/corporate-title
* @endpoint DELETE /v1/entities/{entityId}/urls/{urlId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
* @endpoint DELETE /v1/people/{personId}/urls/{urlId}
* @usedBySchema EntityOperatingStatusSignalSchema
* @usedBySchema EntityUrlLinkMutationSchema
* @usedBySchema EntityUrlLinkSchema
* @contractShape entity.url-crawl-cdn-provider
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/url/CrawlMetadata.kt
*/
var EntityUrlCrawlCdnProviderSchema = _enum([
	"cloudflare",
	"akamai",
	"fastly",
	"awsCloudfront",
	"vercel",
	"netlify",
	"sucuri",
	"incapsula",
	"bunny",
	"keycdn",
	"cdn77",
	"gcore",
	"cdnetworks",
	"azureCdn",
	"leaseweb",
	"digitalocean",
	"stackpath",
	"googlecloudCdn",
	"none",
	"unknown"
]);
//#endregion
//#region ../api-schemas/dist/entity/url-crawl-render-mode.js
/**
* JavaScript rendering requirement for crawl checks.
*
* @openapiSchema EntityUrlCrawlRenderMode
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/urls
* @endpoint GET /v1/entities/{entityId}/urls/{urlId}
* @endpoint GET /v1/entities/{entityId}/urls/all
* @endpoint GET /v1/people/{personId}/entities
* @endpoint GET /v1/people/{personId}/entities/{associationId}
* @endpoint GET /v1/people/{personId}/urls
* @endpoint GET /v1/people/{personId}/urls/{urlId}
* @endpoint GET /v1/people/{personId}/urls/all
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/people
* @endpoint POST /v1/entities/{entityId}/urls
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/people/{personId}/entities
* @endpoint POST /v1/people/{personId}/urls
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint POST /v1/sec/entities/{entityId}/exchange-urls
* @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
* @endpoint PATCH /v1/entities/{entityId}/urls/{urlId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/{personId}/entities/{associationId}
* @endpoint PATCH /v1/people/{personId}/urls/{urlId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/people/{associationId}
* @endpoint PUT /v1/entities/{entityId}/urls/{urlId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/{personId}/entities/{associationId}
* @endpoint PUT /v1/people/{personId}/urls/{urlId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}/corporate-title
* @endpoint DELETE /v1/entities/{entityId}/urls/{urlId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
* @endpoint DELETE /v1/people/{personId}/urls/{urlId}
* @usedBySchema EntityUrlLinkMutationSchema
* @usedBySchema EntityUrlLinkSchema
* @contractShape entity.url-crawl-render-mode
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/url/CrawlMetadata.kt
*/
var EntityUrlCrawlRenderModeSchema = _enum([
	"static",
	"jsRequired",
	"jsEnhanced"
]);
//#endregion
//#region ../api-schemas/dist/entity/url-type.js
/**
* Canonical URL platform type such as website, linkedin, twitter, or github. Lifecycle facts belong on link flags such as isCurrent and isPrimary.
*
* @openapiSchema EntityUrlType
* @endpoint GET /v1/app/saved-views
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/entities/duplicate-check
* @endpoint GET /v1/entities/duplicate-check/candidates
* @endpoint GET /v1/entities/summary
* @endpoint GET /v1/jobs/entities/duplicate-check
* @endpoint GET /v1/jobs/people/duplicate-check
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/people/duplicate-check
* @endpoint GET /v1/people/duplicate-check/candidates
* @endpoint GET /v1/search/link
* @endpoint GET /v1/app/saved-views/{savedViewId}
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/urls
* @endpoint GET /v1/entities/{entityId}/urls/{urlId}
* @endpoint GET /v1/entities/{entityId}/urls/all
* @endpoint GET /v1/jobs/entities/duplicate-check/{jobId}
* @endpoint GET /v1/jobs/people/duplicate-check/{jobId}
* @endpoint GET /v1/people/{personId}/entities
* @endpoint GET /v1/people/{personId}/entities/{associationId}
* @endpoint GET /v1/people/{personId}/urls
* @endpoint GET /v1/people/{personId}/urls/{urlId}
* @endpoint GET /v1/people/{personId}/urls/all
* @endpoint POST /v1/app/saved-views
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/people
* @endpoint POST /v1/entities/{entityId}/urls
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/duplicate-check
* @endpoint POST /v1/entities/duplicate-check/candidates
* @endpoint POST /v1/entities/filters/refine
* @endpoint POST /v1/entities/filters/search
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/jobs/entities/duplicate-check
* @endpoint POST /v1/jobs/people/duplicate-check
* @endpoint POST /v1/people/{personId}/entities
* @endpoint POST /v1/people/{personId}/urls
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/people/duplicate-check
* @endpoint POST /v1/people/duplicate-check/candidates
* @endpoint POST /v1/search/all
* @endpoint POST /v1/sec/entities/{entityId}/exchange-urls
* @endpoint PATCH /v1/app/saved-views/{savedViewId}
* @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
* @endpoint PATCH /v1/entities/{entityId}/urls/{urlId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/{personId}/entities/{associationId}
* @endpoint PATCH /v1/people/{personId}/urls/{urlId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/people/{associationId}
* @endpoint PUT /v1/entities/{entityId}/urls/{urlId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/{personId}/entities/{associationId}
* @endpoint PUT /v1/people/{personId}/urls/{urlId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/app/saved-views/{savedViewId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}/corporate-title
* @endpoint DELETE /v1/entities/{entityId}/urls/{urlId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
* @endpoint DELETE /v1/people/{personId}/urls/{urlId}
* @usedBySchema DuplicateUrlCandidateSchema
* @usedBySchema EntityDuplicateCriteriaSchema
* @usedBySchema EntityFilterSchema
* @usedBySchema EntityUrlLinkSchema
* @usedBySchema PersonDuplicateCriteriaSchema
* @contractShape entity.url-type
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/url/UrlType.kt
*/
var EntityUrlTypeSchema = _enum([
	"website",
	"linkedin",
	"twitter",
	"github",
	"facebook",
	"instagram",
	"tiktok",
	"youtube",
	"subreddit",
	"forum",
	"documentation",
	"support",
	"statuspage",
	"changelog",
	"roadmap",
	"discord",
	"crunchbase",
	"wellfound",
	"angellist",
	"glassdoor",
	"theorg",
	"ycombinator",
	"wikipedia",
	"pitchbook",
	"morningstar",
	"bloomberg",
	"nyse",
	"nasdaq",
	"g2",
	"producthunt",
	"trustpilot",
	"alternativeto",
	"gartnerpeerinsights",
	"getapp",
	"sourceforge",
	"appstore",
	"googleplay",
	"capterra",
	"trustradius",
	"hubspotmarketplace",
	"slackappdirectory",
	"awsmarketplace",
	"salesforceappexchange",
	"chromewebstore",
	"vscodemarketplace",
	"npm",
	"pypi",
	"maven",
	"dockerhub",
	"homebrew",
	"crates"
]);
/**
* Canonical URL link resource with owner, status, crawl, and source metadata. Lifecycle state (current vs former, primary vs secondary) is encoded by `isCurrent` and `isPrimary` — `urlType` is the canonical platform role only and MUST be one of the closed `EntityUrlType` values. To record a rebrand or domain migration, retain the prior URL with the same `urlType` (typically `website`) and set `isCurrent=false, isPrimary=false`; do not propose new enum values.
*
* @openapiSchema EntityUrlLink
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/urls
* @endpoint GET /v1/entities/{entityId}/urls/{urlId}
* @endpoint GET /v1/entities/{entityId}/urls/all
* @endpoint GET /v1/people/{personId}/entities
* @endpoint GET /v1/people/{personId}/entities/{associationId}
* @endpoint GET /v1/people/{personId}/urls
* @endpoint GET /v1/people/{personId}/urls/{urlId}
* @endpoint GET /v1/people/{personId}/urls/all
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/people
* @endpoint POST /v1/entities/{entityId}/urls
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/people/{personId}/entities
* @endpoint POST /v1/people/{personId}/urls
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint POST /v1/sec/entities/{entityId}/exchange-urls
* @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
* @endpoint PATCH /v1/entities/{entityId}/urls/{urlId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/{personId}/entities/{associationId}
* @endpoint PATCH /v1/people/{personId}/urls/{urlId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/people/{associationId}
* @endpoint PUT /v1/entities/{entityId}/urls/{urlId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/{personId}/entities/{associationId}
* @endpoint PUT /v1/people/{personId}/urls/{urlId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}/corporate-title
* @endpoint DELETE /v1/entities/{entityId}/urls/{urlId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
* @endpoint DELETE /v1/people/{personId}/urls/{urlId}
* @usedBySchema EntityEnrichmentSchema
* @usedBySchema EntityPersonAssociationSchema
* @usedBySchema PageEntityUrlLinkSchema
* @usedBySchema PersonEnrichmentSchema
* @contractShape entity.url-link
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/url/UrlLink.kt
*/
var EntityUrlLinkSchema = object({
	crawlCdnProvider: EntityUrlCrawlCdnProviderSchema.nullish(),
	crawlRenderMode: EntityUrlCrawlRenderModeSchema.nullish(),
	createdAt: datetime({ offset: true }).nullish(),
	id: int().nullish(),
	/** `true` = owner currently uses this URL; `false` = historical/former (rebrand source domain, deprecated platform handle). The lifecycle state lives here, NEVER in the `urlType` discriminator. */
	isCurrent: boolean().nullish(),
	/** `true` = canonical/primary URL of this `urlType` for this owner. Only one row per (owner, urlType) may be `isCurrent=true` AND `isPrimary=true`. */
	isPrimary: boolean().nullish(),
	/** Owning record, nested ids only: owner.entityId or owner.personId — exactly one is set, and no name fields. Writes are scoped by the owning entity/person route; owner is never a write field. */
	owner: EntityPersonOwnerSchema.nullish(),
	/** Latest provenance row from res_provenance_event for this URL — the ProvenanceSource query params set by the caller on the most recent write. Private-API only. */
	source: DatasourceSourceMetadataSchema.nullish(),
	sourceId: string().nullish(),
	status: string().nullish(),
	statusChecked: datetime({ offset: true }).nullish(),
	updatedAt: datetime({ offset: true }).nullish(),
	/** Canonical absolute HTTP URL value - validates scheme + host at construction */
	url: string(),
	urlType: EntityUrlTypeSchema
});
/**
* Supplemental entity data — addresses, classification tags, funding, text content, and URL links
*
* @openapiSchema EntityEnrichment
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/detail
* @usedBySchema EntityDetailSchema
* @usedBySchema EntityListSchema
* @contractShape entity.enrichment
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityEnrichment.kt
*/
var EntityEnrichmentSchema = object({
	address: array(AddressSchema),
	/** Entity classification join projection for this read surface. Single-detail and full-detail batch reads include full history; list, default batch, and similar-entity reads may filter to current joins. Use GET /v1/entities/{entityId}/classifications?includeInactive=true for authoritative join history. */
	classification: EntityClassificationSchema,
	fundingDetail: EntityFundingDetailSchema.nullish(),
	text: EntityTextBundleSchema,
	/** URL link filter values */
	urlLink: array(EntityUrlLinkSchema)
});
/**
* Grouped entity image fields for square, standard, and monogram logo state
*
* @openapiSchema EntityImage
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/fundraise-rounds
* @endpoint GET /v1/entities/detail/investments
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/entities/duplicate-check
* @endpoint GET /v1/entities/sitemap-routes
* @endpoint GET /v1/entities/summary
* @endpoint GET /v1/harness/runs
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/addresses/locations/{scope}/{slug}
* @endpoint GET /v1/entities/{entityId}/acquisitions
* @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint GET /v1/entities/relationships/{relationshipId}
* @endpoint GET /v1/harness/runs/{runId}
* @endpoint GET /v1/news/{id}/related-companies
* @endpoint GET /v1/people/{personId}/entities
* @endpoint GET /v1/people/{personId}/entities/{associationId}
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/acquisitions
* @endpoint POST /v1/entities/{entityId}/people
* @endpoint POST /v1/entities/{entityId}/relationships
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/fundraise-rounds
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/duplicate-check
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/entities/relationships/join
* @endpoint POST /v1/people/{personId}/entities
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PATCH /v1/entities/relationships/{relationshipId}
* @endpoint PATCH /v1/people/{personId}/entities/{associationId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PUT /v1/entities/{entityId}/people/{associationId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PUT /v1/people/{personId}/entities/{associationId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}/corporate-title
* @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint DELETE /v1/entities/relationships/{relationshipId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
* @usedBySchema EntityFundraiseSchema
* @usedBySchema EntityPersonAssociationSchema
* @usedBySchema EntitySchema
* @contractShape entity.image
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityImage.kt
*/
var EntityImageSchema = object({
	/** Whether entity image monogram */
	isMonogram: boolean(),
	logo: string().nullish(),
	logoSquare: string().nullish()
});
//#endregion
//#region ../api-schemas/dist/entity/alias-type.js
/**
* Alias types for entity NameAlias
*
* @openapiSchema EntityAliasType
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/fundraise-rounds
* @endpoint GET /v1/entities/detail/investments
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/entities/duplicate-check
* @endpoint GET /v1/entities/sitemap-routes
* @endpoint GET /v1/entities/summary
* @endpoint GET /v1/harness/runs
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/search/link
* @endpoint GET /v1/addresses/locations/{scope}/{slug}
* @endpoint GET /v1/entities/{entityId}/acquisitions
* @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint GET /v1/entities/{entityId}/operating-status
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint GET /v1/entities/relationships/{relationshipId}
* @endpoint GET /v1/harness/runs/{runId}
* @endpoint GET /v1/news/{id}/related-companies
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/acquisitions
* @endpoint POST /v1/entities/{entityId}/operating-status
* @endpoint POST /v1/entities/{entityId}/relationships
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/fundraise-rounds
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/duplicate-check
* @endpoint POST /v1/entities/merge
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/entities/relationships/join
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint POST /v1/sec/entities/{entityId}/aliases
* @endpoint PATCH /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PATCH /v1/entities/{entityId}/operating-status
* @endpoint PATCH /v1/entities/{entityId}/type-record
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PATCH /v1/entities/relationships/{relationshipId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PUT /v1/entities/{entityId}/operating-status
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint DELETE /v1/entities/relationships/{relationshipId}
* @usedBySchema EntityNameAliasEntityAliasTypeSchema
* @contractShape entity.alias-type
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/alias/AliasType.kt
*/
var EntityAliasTypeSchema = _enum(["alternativeDba", "relatedLegal"]);
/**
* Alternate name used for search and display
*
* @openapiSchema EntityNameAliasEntityAliasType
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/fundraise-rounds
* @endpoint GET /v1/entities/detail/investments
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/entities/duplicate-check
* @endpoint GET /v1/entities/sitemap-routes
* @endpoint GET /v1/entities/summary
* @endpoint GET /v1/harness/runs
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/search/link
* @endpoint GET /v1/addresses/locations/{scope}/{slug}
* @endpoint GET /v1/entities/{entityId}/acquisitions
* @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint GET /v1/entities/{entityId}/operating-status
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint GET /v1/entities/relationships/{relationshipId}
* @endpoint GET /v1/harness/runs/{runId}
* @endpoint GET /v1/news/{id}/related-companies
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/acquisitions
* @endpoint POST /v1/entities/{entityId}/operating-status
* @endpoint POST /v1/entities/{entityId}/relationships
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/fundraise-rounds
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/duplicate-check
* @endpoint POST /v1/entities/merge
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/entities/relationships/join
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint POST /v1/sec/entities/{entityId}/aliases
* @endpoint PATCH /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PATCH /v1/entities/{entityId}/operating-status
* @endpoint PATCH /v1/entities/{entityId}/type-record
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PATCH /v1/entities/relationships/{relationshipId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PUT /v1/entities/{entityId}/operating-status
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint DELETE /v1/entities/relationships/{relationshipId}
* @usedBySchema EntityMutationSchema
* @usedBySchema EntitySchema
* @contractShape entity.name-alias-entity-alias-type
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/alias/NameAlias.kt
*/
var EntityNameAliasEntityAliasTypeSchema = object({
	/** Show this alias in public name displays. */
	displayable: boolean().nullish(),
	/** Alternate name text */
	name: string(),
	/** Alias type classification */
	type: EntityAliasTypeSchema.nullish()
});
//#endregion
//#region ../api-schemas/dist/entity/sitemap.js
/**
* Sub-route eligibility GATE for sitemap.xml emission, not a write receipt. Each boolean is true only when the underlying rows EXIST AND every entity that sub-route renders (this entity and any counterpart, e.g. the acquired/acquirer company behind `hasAcquisitions`) currently passes publication visibility (not hidden, on sitemap). A `false` flag when you know the data exists means an unmet visibility prerequisite -- publish the hidden entity -- confirmed against the owning command-side read; it is an active gate result, not refresh lag, and a flag being `false` says nothing succeeded-and-is-fine. Served from a materialized projection (`mv_entity_sitemap_url_slots`) refreshed asynchronously, so a `true` flag can trail a gate that was just satisfied, but a successful write alone does not flip any flag.
*
* @openapiSchema EntitySitemap
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/fundraise-rounds
* @endpoint GET /v1/entities/detail/investments
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/entities/duplicate-check
* @endpoint GET /v1/entities/sitemap-routes
* @endpoint GET /v1/entities/summary
* @endpoint GET /v1/harness/runs
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/search/link
* @endpoint GET /v1/addresses/locations/{scope}/{slug}
* @endpoint GET /v1/entities/{entityId}/acquisitions
* @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint GET /v1/entities/relationships/{relationshipId}
* @endpoint GET /v1/harness/runs/{runId}
* @endpoint GET /v1/news/{id}/related-companies
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/acquisitions
* @endpoint POST /v1/entities/{entityId}/relationships
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/fundraise-rounds
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/duplicate-check
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/entities/relationships/join
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PATCH /v1/entities/relationships/{relationshipId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint DELETE /v1/entities/relationships/{relationshipId}
* @usedBySchema EntityDetailSchema
* @usedBySchema EntitySchema
* @contractShape entity.sitemap
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntitySitemap.kt
*/
var EntitySitemapSchema = object({
	/** Whether `/companies/<slug>/acquisitions` should be emitted. True only when an acquisition relationship exists AND both the acquired and acquirer entities are publicly visible. A confirmed acquisition relationship row with this flag `false` (or with `entities acquisitions list` returning zero rows) means a counterpart entity is still hidden -- publish it -- it is a visibility gate, not list lag. */
	hasAcquisitions: boolean().default(false).optional(),
	/** Whether the profile Analysis sub-route should be emitted. */
	hasAnalysis: boolean(),
	/** Whether the profile Employees sub-route should be emitted. */
	hasEmployees: boolean(),
	/** Whether the profile Fundraising sub-route should be emitted. */
	hasFundraising: boolean(),
	/** Whether the profile News sub-route should be emitted. */
	hasNews: boolean(),
	/** Slugs of related Product/Service entities that should each get their own `/companies/<slug>/products-services/<productSlug>` URL, capped at `MAX_PRODUCT_SERVICE_SLUGS` server-side. Derived from current `productService` relationships in either stored direction; the entity relationships resource is the authoritative, read-your-writes view of those joins. */
	productServiceSlug: array(string())
});
//#endregion
//#region ../api-schemas/dist/entity/status.js
/**
* Grouped entity visibility and editorial status flags
*
* @openapiSchema EntityStatus
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/fundraise-rounds
* @endpoint GET /v1/entities/detail/investments
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/entities/duplicate-check
* @endpoint GET /v1/entities/sitemap-routes
* @endpoint GET /v1/entities/summary
* @endpoint GET /v1/harness/runs
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/search/link
* @endpoint GET /v1/addresses/locations/{scope}/{slug}
* @endpoint GET /v1/entities/{entityId}/acquisitions
* @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/{entityId}/status
* @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint GET /v1/entities/relationships/{relationshipId}
* @endpoint GET /v1/harness/runs/{runId}
* @endpoint GET /v1/news/{id}/related-companies
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/acquisitions
* @endpoint POST /v1/entities/{entityId}/relationships
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/fundraise-rounds
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/duplicate-check
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/entities/relationships/join
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PATCH /v1/entities/{entityId}/status
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PATCH /v1/entities/relationships/{relationshipId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint DELETE /v1/entities/relationships/{relationshipId}
* @usedBySchema EntitySchema
* @contractShape entity.status
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityStatus.kt
*/
var EntityStatusSchema = object({
	/** Whether this entity is editorially featured */
	isFeatured: boolean(),
	/** Whether this entity is hidden from public list and detail views */
	isHidden: boolean(),
	/** Whether this entity has passed editorial verification */
	isVerified: boolean(),
	/** Whether this entity is included in the public sitemap */
	showOnSitemap: boolean()
});
//#endregion
//#region ../api-schemas/dist/entity/entity.js
/**
* Flat entity core record — identity, naming, status, image, and source metadata. An entity is our umbrella record for organizations such as companies, funds, investment firms and investors, accelerators, nonprofits, and government agencies, plus products and services connected to those organizations. Returned directly by thin-mode (?mode=thin) and alphabetical (?letter=X) list endpoints. Nested as .core inside EntityList for default list reads and EntityDetail for detail reads.
*
* @openapiSchema Entity
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/fundraise-rounds
* @endpoint GET /v1/entities/detail/investments
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/entities/duplicate-check
* @endpoint GET /v1/entities/sitemap-routes
* @endpoint GET /v1/entities/summary
* @endpoint GET /v1/harness/runs
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/search/link
* @endpoint GET /v1/addresses/locations/{scope}/{slug}
* @endpoint GET /v1/entities/{entityId}/acquisitions
* @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint GET /v1/entities/relationships/{relationshipId}
* @endpoint GET /v1/harness/runs/{runId}
* @endpoint GET /v1/news/{id}/related-companies
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/acquisitions
* @endpoint POST /v1/entities/{entityId}/relationships
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/fundraise-rounds
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/duplicate-check
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/entities/relationships/join
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PATCH /v1/entities/relationships/{relationshipId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint DELETE /v1/entities/relationships/{relationshipId}
* @usedBySchema EntityAcceleratorParticipationSchema
* @usedBySchema EntityAcquisitionSchema
* @usedBySchema EntityDetailSchema
* @usedBySchema EntityFundraiseTransactionEntitySchema
* @usedBySchema EntityListSchema
* @usedBySchema EntityRelationshipSchema
* @usedBySchema HarnessRunDetailSchema
* @usedBySchema PageEntitySchema
* @usedBySchema PersonGraphCoInvestorSchema
* @usedBySchema PersonGraphRolePeerSchema
* @usedBySchema PersonInvestedCompanySchema
* @contractShape entity.entity
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/Entity.kt
*/
var EntitySchema = object({
	/** Record creation timestamp */
	createdAt: datetime({ offset: true }).nullish(),
	/** Default currency code (ISO 4217) */
	defaultCurrency: string().nullish(),
	/** Year the entity was founded */
	foundedYear: int().nullish(),
	/** Unique entity identifier */
	id: uuid(),
	/** Logo and monogram image metadata */
	image: EntityImageSchema,
	/** Provenance-grounded last-modified watermark (schema.org dateModified). Advances only when a real, consumer-meaningful data point changes via a recorded provenance event — never on timestamp-only writes, migrations, or index refreshes. Pairs with createdAt (dateCreated) and grounds the sitemap lastmod. */
	lastModifiedAt: datetime({ offset: true }).nullish(),
	/** All names this entity has been known by — current alternates, DBAs, former names, and rebrand-source identities. Naming history (e.g. `Metaphor Systems` for the current `Exa` entity) lives here; never as a separate relationship type or `formerName` field. */
	nameAlias: array(EntityNameAliasEntityAliasTypeSchema),
	/** Resolved display brand name */
	nameBrand: string(),
	/** Registered legal name */
	nameLegal: string().nullish(),
	/** Current operating status. Use Acquired Subsidiary when the entity was acquired and still operates; use Acquired only when it is terminal, folded, or closed. */
	operatingStatus: string().nullish(),
	/** Stable, immutable public handle (e.g. `eV1StGXR8Z5a`). Never changes once assigned, unlike the slug. Null on projections that do not select it and on rows still awaiting handle backfill. */
	publicId: string().regex(/^e[0-9A-Za-z]{11}$/).nullish(),
	/** Absolute public profile URL on the aVenture front-end, e.g. `https://aventure.vc/non-profits/{slug}`, derived from the typeRecord's canonical route family. Null when the route needs relationship context or the record has no direct public SSR route (Business Line, Organization, Product, Service, or a non-public slug). EntityDetail.publicUrl resolves Business Line parent context. Product/Service pages are provider-nested: compose the provider entity's publicUrl + `/products-services/` + this record's slug, or consume the sitemap-urls slot paths, which already emit the composed child routes. */
	publicUrl: string().nullish(),
	/** Sub-route eligibility, populated by the sitemap projection. Null on non-sitemap reads to keep thin payloads compact. */
	sitemap: EntitySitemapSchema.nullish(),
	/** URL-safe identifier */
	slug: string().regex(/^[a-z0-9_-]+$/).max(255),
	/** Data provenance and source tracking */
	source: DatasourceSourceMetadataSchema.nullish(),
	/** Privileged-only visibility and curation flags */
	status: EntityStatusSchema.optional(),
	/** Entity type classification */
	typeRecord: EntityTypeSchema.nullish(),
	/** Last modification timestamp */
	updatedAt: datetime({ offset: true }).nullish()
});
//#endregion
//#region ../api-schemas/dist/entity/fundraise-transaction-entity.js
/**
* Entity projection used inside FundraiseTransaction responses
*
* @openapiSchema EntityFundraiseTransactionEntity
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/fundraise-rounds
* @endpoint GET /v1/entities/detail/investments
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/entities/summary
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/fundraise-rounds
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
* @usedBySchema EntityFundraiseTransactionSchema
* @usedBySchema EntityListSummarySchema
* @usedBySchema PersonGraphCareerContextSchema
* @usedBySchema PersonGraphSimilarEntitySchema
* @contractShape entity.fundraise-transaction-entity
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseTransactionEntity.kt
*/
var EntityFundraiseTransactionEntitySchema = object({
	core: EntitySchema,
	fundingDetail: EntityFundingDetailSchema.nullish()
});
//#endregion
//#region ../api-schemas/dist/fundraise/data-confidence.js
/**
* Fundraise data confidence label
*
* @openapiSchema FundraiseDataConfidence
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/fundraise-rounds
* @endpoint GET /v1/entities/detail/investments
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/entities/summary
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/acquisitions
* @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/acquisitions
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/fundraise-rounds
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PUT /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint DELETE /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
* @usedBySchema EntityAcquisitionSchema
* @usedBySchema EntityFundraiseTransactionMutationSchema
* @usedBySchema EntityFundraiseTransactionSchema
* @contractShape fundraise.data-confidence
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseTransaction.kt
*/
var FundraiseDataConfidenceSchema = _enum([
	"High",
	"Medium",
	"Low",
	"Verified"
]);
//#endregion
//#region ../api-schemas/dist/fundraise/investment-attribution-type.js
/**
* How a fundraise investor attribution row was selected for an investor view.
*
* @openapiSchema FundraiseInvestmentAttributionType
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/fundraise-rounds
* @endpoint GET /v1/entities/detail/investments
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/entities/summary
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/fundraise-rounds
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
* @usedBySchema FundraiseInvestmentAttributionSchema
* @contractShape fundraise.investment-attribution-type
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseInvestmentAttribution.kt
*/
var FundraiseInvestmentAttributionTypeSchema = _enum(["direct", "managedFund"]);
//#endregion
//#region ../api-schemas/dist/round/label.js
/**
* Round participation label - shared by entity and person investor participation
*
* @openapiSchema RoundLabel
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/fundraise-rounds
* @endpoint GET /v1/entities/detail/investments
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/entities/summary
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/fundraise-rounds
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
* @usedBySchema EntityInvestorParticipationSchema
* @usedBySchema FundraiseInvestmentAttributionSchema
* @usedBySchema PersonInvestorParticipationSchema
* @contractShape round.label
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseTransaction.kt
*/
var RoundLabelSchema = object({ round: string() });
//#endregion
//#region ../api-schemas/dist/fundraise/investment-attribution.js
/**
* Investor-specific attribution for one fundraise participation row
*
* @openapiSchema FundraiseInvestmentAttribution
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/fundraise-rounds
* @endpoint GET /v1/entities/detail/investments
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/entities/summary
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/fundraise-rounds
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
* @usedBySchema EntityFundraiseTransactionSchema
* @usedBySchema EntityInvestorParticipationSchema
* @usedBySchema PersonInvestmentSchema
* @usedBySchema PersonInvestorParticipationSchema
* @contractShape fundraise.investment-attribution
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseInvestmentAttribution.kt
*/
var FundraiseInvestmentAttributionSchema = object({
	/** Investor-level attributed amount invested in the fundraise transaction currency. Serialized as a plain JSON number such as 220000 or 123456.78; no currency sign, currency code, comma grouping, or abbreviated amount text is valid. */
	amountInvested: number().nullish(),
	/** How this attribution row participates in the investor view. */
	attributionType: FundraiseInvestmentAttributionTypeSchema,
	/** Investment firm entity receiving the rollup attribution. */
	beneficialEntityId: uuid().nullish(),
	/** Fund-manager relationship id when the attribution rolls up through a managed fund. */
	fundManagerRelationshipId: int().nullish(),
	/** Fundraise investor join identifier */
	joinId: uuid(),
	/** Whether this investor is the lead investor for the round — the lead/anchor investor that set the round terms or made the primary commitment. */
	leadInvestor: boolean(),
	/** Entity recorded directly on the fundraise investor join. */
	recordedEntityId: uuid().nullish(),
	/** Round label for the attributed participation */
	round: RoundLabelSchema.nullish(),
	/** Fundraise transaction identifier */
	transactionId: uuid()
});
/**
* Canonical fundraise transaction view. ONE row per discrete round. An entity that raised pre-seed, seed, and Series A is THREE rows. Combined or rolled-up totals are never modeled here — total raised is a sum across rows.
*
* @openapiSchema EntityFundraiseTransaction
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/fundraise-rounds
* @endpoint GET /v1/entities/detail/investments
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/entities/summary
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/fundraise-rounds
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
* @usedBySchema EntityDetailSchema
* @usedBySchema EntityListSchema
* @usedBySchema EntityListSummarySchema
* @usedBySchema PageEntityFundraiseTransactionSchema
* @contractShape entity.fundraise-transaction
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/fundraise/FundraiseTransaction.kt
*/
var EntityFundraiseTransactionSchema = object({
	amountRaised: number().int().nullish(),
	createdAt: datetime({ offset: true }).nullish(),
	currency: string().nullish(),
	/** Data confidence level */
	dataConfidence: FundraiseDataConfidenceSchema.nullish(),
	dateAnnounced: datetime({ offset: true }).nullish(),
	dateFundingComplete: datetime({ offset: true }).nullish(),
	dateInvestorExit: datetime({ offset: true }).nullish(),
	entity: EntityFundraiseTransactionEntitySchema.nullish(),
	/** Canonical fundraise transaction UUID */
	id: uuid(),
	/** Investor-specific attribution when returned from investor-perspective investment views. amountInvested is not added to amountRaised; it is the selected investor's attributed participation amount for this round. */
	investorAttribution: FundraiseInvestmentAttributionSchema.nullish(),
	/** Source-reported number of investors in the round. This can exceed the identified investor joins when a source reports a total without naming every investor. */
	investorCount: int().nullish(),
	round: string().nullish(),
	sourceAttribution: array(FundraiseInvestmentAttributionSchema),
	updatedAt: datetime({ offset: true }).nullish(),
	valuationPostMoney: number().int().nullish(),
	valuationPreMoney: number().int().nullish()
});
//#endregion
//#region ../api-schemas/dist/entity/comparison-signals.js
/**
* Competitive comparison signals for a provider entity — sells-to customers, pricing model, ownership, funding stage, total raised, and website. Projected from entity enrichment for side-by-side comparison; founded year rides the entity core.
*
* @openapiSchema EntityComparisonSignals
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/{entityId}/relationships
* @endpoint GET /v1/entities/relationships/{relationshipId}
* @endpoint POST /v1/entities/{entityId}/relationships
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/relationships/join
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/relationships/{relationshipId}
* @endpoint PUT /v1/entities/detail
* @endpoint DELETE /v1/entities/relationships/{relationshipId}
* @usedBySchema EntityRelationshipSchema
* @contractShape entity.comparison-signals
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityComparisonSignals.kt
*/
var EntityComparisonSignalsSchema = object({
	/** Latest funding stage when known */
	fundingStage: FundingStageSchema.nullish(),
	/** Provider ownership structure (current typeOwnership tags) */
	ownership: array(string()),
	/** Provider pricing/revenue model (current typeRevenue tags) */
	pricingModel: array(string()),
	/** Customer types the provider sells to (current typeCustomer tags) */
	sellsTo: array(string()),
	/** Total capital raised when known */
	totalRaised: number().nullish(),
	/** Provider website URL when known */
	website: string().nullish()
});
//#endregion
//#region ../api-schemas/dist/entity/relationship.js
var EntityRelationshipSchemaDefinition = object({
	/** Effective date for this relationship when known */
	asOf: date().nullish(),
	/** Competitive comparison signals for the joined entity when it is a product/service provider — sells-to, pricing model, ownership, funding, and website. Null for every other joined entity. Lets comparison surfaces render provider columns without a second per-provider fetch. */
	comparisonSignals: EntityComparisonSignalsSchema.nullish(),
	createdAt: datetime({ offset: true }).nullish(),
	/** Relationship-specific detail. acceleratorParticipant rows use `batch=<label>`, or `program=<name>; batch=<label>` only for a distinct sub-program. program= never repeats the accelerator name or the batch, and batch= never contains the accelerator name — the row already points to the accelerator entity. */
	detail: string().nullish(),
	/** Joined entity on the other side of this relationship — read-only display projection. Writes identify both sides only via the flat sourceEntityId and targetEntityId UUIDs, never a nested entity object. */
	entity: EntitySchema,
	/** Integer entity_relationship.id row id, not an entity UUID */
	id: int().nullish(),
	/** Current-state curation flag for this relationship row. Default relationship reads return only rows where isCurrent=true and isPrimary=true. */
	isCurrent: boolean().nullish(),
	/** Primary/renderable curation flag for this relationship row. isCurrent=false or isPrimary=false hides the row from default relationship reads. */
	isPrimary: boolean().nullish(),
	/** Nested relationships for the joined entity */
	get relationship() {
		return array(EntityRelationshipSchemaDefinition);
	},
	/** Canonical relationship type, one of: acceleratorParticipant, acquirer, affinity, calculated, competingProductService, competitor, customer, fundManagerFirm, parent, productService, serviceProvider, similarCompany, spinOffFrom, successor. Similarity endpoint rows use stored relationship types when a curation row exists and calculated when the row comes from semantic/vector similarity. */
	relationshipType: string(),
	/** Source URL or compact source label copied to the relationship row */
	source: string().nullish(),
	/** Canonical source entity UUID stored on the relationship row. Compare with the requested entity id and `/v1/entities/relationships/types` sourceRole/targetRole to orient directional relationships such as parent. */
	sourceEntityId: uuid().nullish(),
	/** Canonical target entity UUID stored on the relationship row. Compare with the requested entity id and `/v1/entities/relationships/types` sourceRole/targetRole to orient directional relationships such as parent. */
	targetEntityId: uuid().nullish(),
	updatedAt: datetime({ offset: true }).nullish()
});
/**
* Domain record for entity relationships - oriented from the requested entity to the joined entity
*
* @openapiSchema EntityRelationship
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/{entityId}/relationships
* @endpoint GET /v1/entities/relationships/{relationshipId}
* @endpoint POST /v1/entities/{entityId}/relationships
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/relationships/join
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/relationships/{relationshipId}
* @endpoint PUT /v1/entities/detail
* @endpoint DELETE /v1/entities/relationships/{relationshipId}
* @usedBySchema EntityDetailSchema
* @usedBySchema PageEntityRelationshipSchema
* @contractShape entity.relationship
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityRelationship.kt
*/
var EntityRelationshipSchema = EntityRelationshipSchemaDefinition;
/**
* Flattened accelerator participation derived from acceleratorParticipant relationship rows and joined to the canonical accelerator entity.
*
* @openapiSchema EntityAcceleratorParticipation
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/detail
* @usedBySchema EntityListResearchSchema
* @usedBySchema EntityResearchSchema
* @contractShape entity.accelerator-participation
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityAcceleratorParticipation.kt
*/
var EntityAcceleratorParticipationSchema = object({
	/** Canonical thin accelerator entity from the acceleratorParticipant relationship */
	accelerator: EntitySchema,
	/** Full accelerator participation name, including program detail */
	acceleratorName: string(),
	/** Participation effective timestamp */
	asOfDate: datetime({ offset: true }),
	/** Accelerator batch or cohort */
	batch: string().nullish(),
	/** Stable participation identifier anchored to the contributing acceleratorParticipant relationship */
	id: string(),
	/** Accelerator program name, when the source distinguishes one */
	program: string().nullish(),
	/** Accelerator participation status */
	status: string().nullish()
});
//#endregion
//#region ../api-schemas/dist/datasource/provenance-actor-type.js
/**
* Actor boundary for a provenance write event
*
* @openapiSchema DatasourceProvenanceActorType
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/provenance/history
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/{entityId}/research/details
* @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
* @endpoint GET /v1/entities/{entityId}/research/snippets
* @endpoint GET /v1/entities/{entityId}/research/snippets/{snippetId}
* @endpoint POST /v1/app/blog/articles
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/acquisitions
* @endpoint POST /v1/entities/{entityId}/addresses
* @endpoint POST /v1/entities/{entityId}/blog-posts
* @endpoint POST /v1/entities/{entityId}/classifications
* @endpoint POST /v1/entities/{entityId}/operating-status
* @endpoint POST /v1/entities/{entityId}/people
* @endpoint POST /v1/entities/{entityId}/relationships
* @endpoint POST /v1/entities/{entityId}/research/details
* @endpoint POST /v1/entities/{entityId}/research/snippets
* @endpoint POST /v1/entities/{entityId}/texts
* @endpoint POST /v1/entities/{entityId}/unique-ids
* @endpoint POST /v1/entities/{entityId}/urls
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/classifications/reconcile
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/financial/valuation
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/fundraise-investor-joins
* @endpoint POST /v1/entities/detail/fundraise-rounds
* @endpoint POST /v1/entities/detail/news
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/merge
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/entities/relationships/join
* @endpoint POST /v1/media/convert
* @endpoint POST /v1/media/entity-logo/import
* @endpoint POST /v1/media/logo-audit/jobs
* @endpoint POST /v1/media/news-thumbnail/import
* @endpoint POST /v1/media/retrofit/jobs
* @endpoint POST /v1/media/screenshots
* @endpoint POST /v1/media/upload
* @endpoint POST /v1/news/detail
* @endpoint POST /v1/people/{personId}/addresses
* @endpoint POST /v1/people/{personId}/blog-posts
* @endpoint POST /v1/people/{personId}/entities
* @endpoint POST /v1/people/{personId}/texts
* @endpoint POST /v1/people/{personId}/unique-ids
* @endpoint POST /v1/people/{personId}/urls
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/news
* @endpoint POST /v1/people/merge
* @endpoint POST /v1/research/external-social-posts
* @endpoint POST /v1/search/all
* @endpoint POST /v1/sec/entities/{entityId}/address
* @endpoint POST /v1/sec/entities/{entityId}/aliases
* @endpoint POST /v1/sec/entities/{entityId}/exchange-urls
* @endpoint POST /v1/sec/entities/{entityId}/identifiers
* @endpoint PATCH /v1/app/blog/articles/{id}/slug
* @endpoint PATCH /v1/app/pages/{id}/slug
* @endpoint PATCH /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PATCH /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint PATCH /v1/entities/{entityId}/blog-posts/{blogPostId}
* @endpoint PATCH /v1/entities/{entityId}/classifications/{classificationId}
* @endpoint PATCH /v1/entities/{entityId}/operating-status
* @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
* @endpoint PATCH /v1/entities/{entityId}/slug
* @endpoint PATCH /v1/entities/{entityId}/status
* @endpoint PATCH /v1/entities/{entityId}/texts/{textId}
* @endpoint PATCH /v1/entities/{entityId}/type-record
* @endpoint PATCH /v1/entities/{entityId}/urls/{urlId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/financial/valuation/{detailId}
* @endpoint PATCH /v1/entities/detail/financial/valuation/{year}/{month}
* @endpoint PATCH /v1/entities/detail/fundraise-investor-joins
* @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PATCH /v1/entities/detail/news/{newsId}
* @endpoint PATCH /v1/entities/relationships/{relationshipId}
* @endpoint PATCH /v1/news/{newsId}/slug
* @endpoint PATCH /v1/news/detail
* @endpoint PATCH /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint PATCH /v1/people/{personId}/blog-posts/{blogPostId}
* @endpoint PATCH /v1/people/{personId}/entities/{associationId}
* @endpoint PATCH /v1/people/{personId}/slug
* @endpoint PATCH /v1/people/{personId}/texts/{textId}
* @endpoint PATCH /v1/people/{personId}/urls/{urlId}
* @endpoint PATCH /v1/people/detail
* @endpoint PATCH /v1/people/detail/news/{newsId}
* @endpoint PATCH /v1/research/external-social-posts/{externalSocialPostId}
* @endpoint PUT /v1/app/blog/articles/{id}
* @endpoint PUT /v1/app/blog/articles/by-slug/{slug}
* @endpoint PUT /v1/app/pages/{id}
* @endpoint PUT /v1/app/pages/by-slug/{slug}
* @endpoint PUT /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint PUT /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint PUT /v1/entities/{entityId}/blog-posts/{blogPostId}
* @endpoint PUT /v1/entities/{entityId}/classifications/{classificationId}
* @endpoint PUT /v1/entities/{entityId}/operating-status
* @endpoint PUT /v1/entities/{entityId}/people/{associationId}
* @endpoint PUT /v1/entities/{entityId}/research/details/{detailId}
* @endpoint PUT /v1/entities/{entityId}/research/snippets/{snippetId}
* @endpoint PUT /v1/entities/{entityId}/texts/{textId}
* @endpoint PUT /v1/entities/{entityId}/urls/{urlId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/financial/valuation/{detailId}
* @endpoint PUT /v1/entities/detail/financial/valuation/{year}/{month}
* @endpoint PUT /v1/entities/detail/fundraise-investor-joins
* @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint PUT /v1/entities/detail/news/{newsId}
* @endpoint PUT /v1/news/detail
* @endpoint PUT /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint PUT /v1/people/{personId}/blog-posts/{blogPostId}
* @endpoint PUT /v1/people/{personId}/entities/{associationId}
* @endpoint PUT /v1/people/{personId}/texts/{textId}
* @endpoint PUT /v1/people/{personId}/urls/{urlId}
* @endpoint PUT /v1/people/detail
* @endpoint PUT /v1/people/detail/news/{newsId}
* @endpoint PUT /v1/research/external-social-posts/{externalSocialPostId}
* @endpoint DELETE /v1/app/blog/articles/{id}/slug/redirects/{redirectId}
* @endpoint DELETE /v1/app/pages/{id}/slug/redirects/{redirectId}
* @endpoint DELETE /v1/entities/{entityId}/acquisitions/{relationshipId}
* @endpoint DELETE /v1/entities/{entityId}/addresses/{addressJoinId}
* @endpoint DELETE /v1/entities/{entityId}/blog-posts/{blogPostId}
* @endpoint DELETE /v1/entities/{entityId}/classifications/{classificationId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}/corporate-title
* @endpoint DELETE /v1/entities/{entityId}/research/details/{detailId}
* @endpoint DELETE /v1/entities/{entityId}/research/snippets/{snippetId}
* @endpoint DELETE /v1/entities/{entityId}/slug/redirects/{redirectId}
* @endpoint DELETE /v1/entities/{entityId}/texts/{textId}
* @endpoint DELETE /v1/entities/{entityId}/unique-ids/{uniqueIdId}
* @endpoint DELETE /v1/entities/{entityId}/urls/{urlId}
* @endpoint DELETE /v1/entities/detail
* @endpoint DELETE /v1/entities/detail/financial/valuation/{detailId}
* @endpoint DELETE /v1/entities/detail/financial/valuation/{year}/{month}
* @endpoint DELETE /v1/entities/detail/fundraise-investor-joins
* @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
* @endpoint DELETE /v1/entities/detail/news/{newsId}
* @endpoint DELETE /v1/entities/relationships/{relationshipId}
* @endpoint DELETE /v1/media/delete
* @endpoint DELETE /v1/news/{newsId}/slug/redirects/{redirectId}
* @endpoint DELETE /v1/news/detail
* @endpoint DELETE /v1/people/{personId}/addresses/{addressJoinId}
* @endpoint DELETE /v1/people/{personId}/blog-posts/{blogPostId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
* @endpoint DELETE /v1/people/{personId}/slug/redirects/{redirectId}
* @endpoint DELETE /v1/people/{personId}/texts/{textId}
* @endpoint DELETE /v1/people/{personId}/unique-ids/{uniqueIdId}
* @endpoint DELETE /v1/people/{personId}/urls/{urlId}
* @endpoint DELETE /v1/people/detail
* @endpoint DELETE /v1/people/detail/news/{newsId}
* @endpoint DELETE /v1/research/external-social-posts/{externalSocialPostId}
* @usedBySchema DatasourceProvenanceActorSchema
* @usedBySchema DatasourceProvenanceSourceSchema
* @contractShape datasource.provenance-actor-type
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/datasource/Provenance.kt
*/
var DatasourceProvenanceActorTypeSchema = _enum(["agent", "employee"]);
//#endregion
//#region ../api-schemas/dist/datasource/provenance-source.js
/**
* Write provenance supplied on mutation query parameters.
*
* @openapiSchema DatasourceProvenanceSource
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/provenance/history
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/{entityId}/research/details
* @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
* @endpoint GET /v1/entities/{entityId}/research/snippets
* @endpoint GET /v1/entities/{entityId}/research/snippets/{snippetId}
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/research/details
* @endpoint POST /v1/entities/{entityId}/research/snippets
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/{entityId}/research/details/{detailId}
* @endpoint PUT /v1/entities/{entityId}/research/snippets/{snippetId}
* @endpoint PUT /v1/entities/detail
* @endpoint DELETE /v1/entities/{entityId}/research/details/{detailId}
* @endpoint DELETE /v1/entities/{entityId}/research/snippets/{snippetId}
* @usedBySchema DatasourceFieldProvenanceSchema
* @usedBySchema EntityResearchSourceSchema
* @contractShape datasource.provenance-source
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/datasource/ProvenanceSource.kt
*/
var DatasourceProvenanceSourceSchema = object({
	/** Actor type; inferred as agent when agentChassis and agentModel are supplied, or as employee from an authenticated user JWT session. */
	actorType: DatasourceProvenanceActorTypeSchema.optional(),
	/** Agent chassis token for agent-authored writes. */
	agentChassis: string().nullish(),
	/** Agent model id for agent-authored writes. */
	agentModel: string().nullish(),
	/** Source detail or reviewer reference for the write. */
	sourceDetail: string(),
	/** Provider name for provider-native IDs or slugs. */
	sourceProvider: string().nullish(),
	/** Provider-native source ID. */
	sourceProviderId: string().nullish(),
	/** Provider-native source slug. */
	sourceProviderSlug: string().nullish(),
	/** Write provenance source type. */
	sourceType: DatasourceDataSourceTypeSchema
});
//#endregion
//#region ../api-schemas/dist/entity/research-source-operation-mode.js
/**
* Mutation operation represented by the latest provenance event for a research row
*
* @openapiSchema EntityResearchSourceOperationMode
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/{entityId}/research/details
* @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
* @endpoint GET /v1/entities/{entityId}/research/snippets
* @endpoint GET /v1/entities/{entityId}/research/snippets/{snippetId}
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/research/details
* @endpoint POST /v1/entities/{entityId}/research/snippets
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/{entityId}/research/details/{detailId}
* @endpoint PUT /v1/entities/{entityId}/research/snippets/{snippetId}
* @endpoint PUT /v1/entities/detail
* @endpoint DELETE /v1/entities/{entityId}/research/details/{detailId}
* @endpoint DELETE /v1/entities/{entityId}/research/snippets/{snippetId}
* @usedBySchema EntityResearchSourceSchema
* @contractShape entity.research-source-operation-mode
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityResearchSource.kt
*/
var EntityResearchSourceOperationModeSchema = _enum([
	"CREATE",
	"UPDATE",
	"DELETE"
]);
//#endregion
//#region ../api-schemas/dist/entity/research-source.js
/**
* Public grouped source metadata for research detail/snippet responses
*
* @openapiSchema EntityResearchSource
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/{entityId}/research/details
* @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
* @endpoint GET /v1/entities/{entityId}/research/snippets
* @endpoint GET /v1/entities/{entityId}/research/snippets/{snippetId}
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/research/details
* @endpoint POST /v1/entities/{entityId}/research/snippets
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/{entityId}/research/details/{detailId}
* @endpoint PUT /v1/entities/{entityId}/research/snippets/{snippetId}
* @endpoint PUT /v1/entities/detail
* @endpoint DELETE /v1/entities/{entityId}/research/details/{detailId}
* @endpoint DELETE /v1/entities/{entityId}/research/snippets/{snippetId}
* @usedBySchema EntityResearchDetailSchema
* @usedBySchema EntityResearchSnippetSchema
* @contractShape entity.research-source
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityResearchSource.kt
*/
var EntityResearchSourceSchema = object({
	changedAt: datetime({ offset: true }).nullish(),
	operation: EntityResearchSourceOperationModeSchema.nullish(),
	provenanceSource: DatasourceProvenanceSourceSchema.nullish(),
	source: string().nullish()
});
//#endregion
//#region ../api-schemas/dist/entity/research-value-type.js
/**
* Output kind for governed research detail values
*
* @openapiSchema EntityResearchValueType
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people/time-series
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/entities/research/details/types
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/{entityId}/research/details
* @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/research/details
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/{entityId}/research/details/{detailId}
* @endpoint PUT /v1/entities/detail
* @endpoint DELETE /v1/entities/{entityId}/research/details/{detailId}
* @usedBySchema EntityResearchDetailSchema
* @usedBySchema EntityResearchFactValueSchema
* @usedBySchema ResearchDetailTypeSchema
* @contractShape entity.research-value-type
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/research/EntityResearchValueType.kt
*/
var EntityResearchValueTypeSchema = _enum([
	"text",
	"numeric",
	"monetary",
	"percentage",
	"date"
]);
//#endregion
//#region ../api-schemas/dist/entity/valuation-data-confidence.js
/**
* Confidence tier stored verbatim in res_entity_detail.data_confidence.
*
* @openapiSchema EntityValuationDataConfidence
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/financial/valuation
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people/time-series
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/{entityId}/research/details
* @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/research/details
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/financial/valuation
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/financial/valuation/{detailId}
* @endpoint PATCH /v1/entities/detail/financial/valuation/{year}/{month}
* @endpoint PUT /v1/entities/{entityId}/research/details/{detailId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/financial/valuation/{detailId}
* @endpoint PUT /v1/entities/detail/financial/valuation/{year}/{month}
* @endpoint DELETE /v1/entities/{entityId}/research/details/{detailId}
* @endpoint DELETE /v1/entities/detail/financial/valuation/{detailId}
* @endpoint DELETE /v1/entities/detail/financial/valuation/{year}/{month}
* @usedBySchema EntityResearchDetailMutationSchema
* @usedBySchema EntityResearchDetailSchema
* @usedBySchema EntityResearchFactValueSchema
* @usedBySchema EntityValuationMutationSchema
* @usedBySchema EntityValuationTimeSeriesPointSchema
* @contractShape entity.valuation-data-confidence
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/valuation/ValuationTimeSeriesPoint.kt
*/
var EntityValuationDataConfidenceSchema = _enum([
	"low",
	"medium",
	"high"
]);
//#endregion
//#region ../api-schemas/dist/research/derived-bucket.js
/**
* Bucket computed from now() to the target date with inclusive boundaries at 0, 3, 6, 12, and 24 months
*
* @openapiSchema ResearchDerivedBucket
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/{entityId}/research/details
* @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/research/details
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/{entityId}/research/details/{detailId}
* @endpoint PUT /v1/entities/detail
* @endpoint DELETE /v1/entities/{entityId}/research/details/{detailId}
* @usedBySchema ResearchDerivedRangeSchema
* @contractShape research.derived-bucket
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/research/ResearchDerivedRange.kt
*/
var ResearchDerivedBucketSchema = _enum([
	"pastDue",
	"withinThreeMonths",
	"threeToSixMonths",
	"sixToTwelveMonths",
	"twelveToTwentyFourMonths",
	"beyondTwoYears"
]);
//#endregion
//#region ../api-schemas/dist/research/derived-range.js
/**
* Read-only derived range projection for targetDateAbsolute detail rows
*
* @openapiSchema ResearchDerivedRange
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/{entityId}/research/details
* @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/research/details
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/{entityId}/research/details/{detailId}
* @endpoint PUT /v1/entities/detail
* @endpoint DELETE /v1/entities/{entityId}/research/details/{detailId}
* @usedBySchema EntityResearchDetailSchema
* @contractShape research.derived-range
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/research/ResearchDerivedRange.kt
*/
var ResearchDerivedRangeSchema = object({
	/** Observation timestamp from the source detail row */
	asOfDate: datetime({ offset: true }),
	/** Derived bucket using inclusive 0, 3, 6, 12, and 24 month boundaries */
	bucket: ResearchDerivedBucketSchema,
	/** Whole months from now() to targetDate */
	monthsFromNow: int(),
	/** Absolute target date stored for a targetDateAbsolute detail row */
	targetDate: datetime({ offset: true })
});
/**
* Canonical research detail row for research.res_entity_detail
*
* @openapiSchema EntityResearchDetail
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/{entityId}/research/details
* @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/{entityId}/research/details
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/{entityId}/research/details/{detailId}
* @endpoint PUT /v1/entities/detail
* @endpoint DELETE /v1/entities/{entityId}/research/details/{detailId}
* @usedBySchema EntityListResearchSchema
* @usedBySchema EntityResearchSchema
* @usedBySchema PageEntityResearchDetailSchema
* @contractShape entity.research-detail
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityResearchDetail.kt
*/
var EntityResearchDetailSchema = object({
	asOfDate: datetime({ offset: true }).nullish(),
	createdAt: datetime({ offset: true }).nullish(),
	creator: string().nullish(),
	dataConfidence: EntityValuationDataConfidenceSchema.nullish(),
	/** Read-only range derived only for targetDateAbsolute detail rows */
	derivedRange: ResearchDerivedRangeSchema.nullish(),
	discreteValue: number().nullish(),
	/** Canonical entity UUID */
	entityId: uuid(),
	id: int(),
	source: string().nullish(),
	sourceRecord: EntityResearchSourceSchema.nullish(),
	textValue: string().nullish(),
	typeResearchDetail: string(),
	updatedAt: datetime({ offset: true }).nullish(),
	valueResearchDetail: string().nullish(),
	valueType: EntityResearchValueTypeSchema
});
//#endregion
//#region ../api-schemas/dist/content/compliance.js
/**
* Derived character/word counts and whether the row text meets its governed type contract (word/character limits and paragraph shape). violation lists each unmet rule and is empty when the row is compliant.
*
* @openapiSchema ContentCompliance
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/{entityId}/research/snippets
* @endpoint GET /v1/entities/{entityId}/research/snippets/{snippetId}
* @endpoint GET /v1/entities/{entityId}/texts
* @endpoint GET /v1/entities/{entityId}/texts/{textId}
* @endpoint GET /v1/people/{personId}/texts
* @endpoint GET /v1/people/{personId}/texts/{textId}
* @endpoint POST /v1/entities/{entityId}/research/snippets
* @endpoint POST /v1/entities/{entityId}/texts
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/people/{personId}/texts
* @endpoint PATCH /v1/entities/{entityId}/texts/{textId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/{personId}/texts/{textId}
* @endpoint PUT /v1/entities/{entityId}/research/snippets/{snippetId}
* @endpoint PUT /v1/entities/{entityId}/texts/{textId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/{personId}/texts/{textId}
* @endpoint DELETE /v1/entities/{entityId}/research/snippets/{snippetId}
* @endpoint DELETE /v1/entities/{entityId}/texts/{textId}
* @endpoint DELETE /v1/people/{personId}/texts/{textId}
* @usedBySchema EntityResearchSnippetSchema
* @usedBySchema EntityTextSchema
* @contractShape content.compliance
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/research/ContentCompliance.kt
*/
var ContentComplianceSchema = object({
	/** Character count of the row text (UTF-16 units). */
	characterCount: int(),
	/** Whether the text satisfies every governed contract rule. */
	meetsRequirements: boolean(),
	/** One human-readable reason per unmet rule; empty when compliant. */
	violation: array(string()),
	/** Word count of the row text (whitespace-separated tokens). */
	wordCount: int()
});
/**
* Persisted research snippet row for one entity.
*
* @openapiSchema EntityResearchSnippet
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint GET /v1/entities/{entityId}/research/snippets
* @endpoint GET /v1/entities/{entityId}/research/snippets/{snippetId}
* @endpoint POST /v1/entities/{entityId}/research/snippets
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/{entityId}/research/snippets/{snippetId}
* @endpoint PUT /v1/entities/detail
* @endpoint DELETE /v1/entities/{entityId}/research/snippets/{snippetId}
* @usedBySchema EntityResearchSchema
* @usedBySchema PageEntityResearchSnippetSchema
* @contractShape entity.research-snippet
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityResearchSnippet.kt
*/
var EntityResearchSnippetSchema = object({
	/** Derived character/word counts and governed-contract compliance for this snippet row; null when not evaluated. */
	compliance: ContentComplianceSchema.nullish(),
	createdAt: datetime({ offset: true }).nullish(),
	/** Canonical entity UUID */
	entityId: uuid(),
	id: int(),
	/** Current row. The live snippet for its type; demoted historical rows read only with includePrivate. */
	isCurrent: boolean(),
	/** Primary row among the current snippets of its type. */
	isPrimary: boolean(),
	source: string().nullish(),
	sourceRecord: EntityResearchSourceSchema.nullish(),
	text: string(),
	textType: string(),
	updatedAt: datetime({ offset: true }).nullish(),
	/** Whether the snippet appears in default reads. Admin/private reads (includePrivate) also return hidden rows. */
	visible: boolean()
});
/**
* Combined entity research disclosure: governed detail rows, research text snippets, and joined accelerator participation.
*
* @openapiSchema EntityResearch
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/{entityId}/research
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/detail
* @usedBySchema EntityDetailSchema
* @contractShape entity.research
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityResearch.kt
*/
var EntityResearchSchema = object({
	/** Joined accelerator participation derived from governed accelerator research rows */
	acceleratorParticipation: array(EntityAcceleratorParticipationSchema),
	/** Flat governed research detail rows filtered by visibility */
	detail: array(EntityResearchDetailSchema),
	/** Research text snippets for this entity */
	snippet: array(EntityResearchSnippetSchema)
});
/**
* Canonical news owner for list and core semantics
*
* @openapiSchema News
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/news
* @endpoint GET /v1/entities/detail/trending-news
* @endpoint GET /v1/news
* @endpoint GET /v1/news/detail
* @endpoint GET /v1/news/duplicate-check
* @endpoint GET /v1/news/recent
* @endpoint GET /v1/news/similar
* @endpoint GET /v1/people/detail/news
* @endpoint GET /v1/search/link
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/news
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/news
* @endpoint POST /v1/news/detail
* @endpoint POST /v1/news/duplicate-check
* @endpoint POST /v1/people/detail/news
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/entities/detail/news/{newsId}
* @endpoint PATCH /v1/news/detail
* @endpoint PATCH /v1/people/detail/news/{newsId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/entities/detail/news/{newsId}
* @endpoint PUT /v1/news/detail
* @endpoint PUT /v1/people/detail/news/{newsId}
* @endpoint DELETE /v1/entities/detail/news/{newsId}
* @endpoint DELETE /v1/news/detail
* @endpoint DELETE /v1/people/detail/news/{newsId}
* @usedBySchema EntityDetailSchema
* @usedBySchema NewsDetailSchema
* @usedBySchema PageNewsSchema
* @usedBySchema PageResultNewsSchema
* @usedBySchema PersonGraphCareerContextSchema
* @contractShape news.news
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/news/News.kt
*/
var NewsSchema = object({
	author: string().nullish(),
	category: string().nullish(),
	createdAt: datetime({ offset: true }).nullish(),
	/** Article summary from the source publication feed; null means the feed supplied no description (expected absence, not an error) — full text is NewsDetail.content */
	excerpt: string().nullish(),
	externalNewsArticle: boolean().nullish(),
	/** Type-safe identifier for news articles */
	id: int(),
	newsImageThumbnail: string().nullish(),
	newsUrlOriginal: string().nullish(),
	pendingApproval: int().nullish(),
	publication: string().nullish(),
	publishedAt: datetime({ offset: true }).nullish(),
	/** Canonical lowercase URL slug for the resource */
	slug: string().regex(/^[a-z0-9_-]+$/).max(255).nullish(),
	/** Grouped source/provenance state for privileged responses */
	source: DatasourceSourceMetadataSchema.optional(),
	/** Article headline; the headline field is title */
	title: string(),
	updatedAt: datetime({ offset: true }).nullish()
});
//#endregion
//#region ../api-schemas/dist/person/alias-type.js
/**
* Alias types for person NameAlias
*
* @openapiSchema PersonAliasType
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/people
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/people/duplicate-check
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/people
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/people/duplicate-check
* @endpoint POST /v1/people/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/detail
* @usedBySchema EntityNameAliasPersonAliasTypeSchema
* @contractShape person.alias-type
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/alias/AliasType.kt
*/
var PersonAliasTypeSchema = _enum([
	"nickname",
	"maidenName",
	"formerName",
	"stageName"
]);
/**
* Alternate name used for search and display
*
* @openapiSchema EntityNameAliasPersonAliasType
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/people
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/people/duplicate-check
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/people
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/people/duplicate-check
* @endpoint POST /v1/people/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/detail
* @usedBySchema PersonDetailSchema
* @usedBySchema PersonSchema
* @contractShape entity.name-alias-person-alias-type
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/alias/NameAlias.kt
*/
var EntityNameAliasPersonAliasTypeSchema = object({
	/** Show this alias in public name displays. */
	displayable: boolean().nullish(),
	/** Alternate name text */
	name: string(),
	/** Alias type classification */
	type: PersonAliasTypeSchema.nullish()
});
/**
* Read projection: person image fields for detail/list responses
*
* @openapiSchema PersonImage
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/people
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/people/duplicate-check
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/people/{personId}/entities
* @endpoint GET /v1/people/{personId}/entities/{associationId}
* @endpoint GET /v1/people/{personId}/graph
* @endpoint POST /v1/entities/{entityId}/people
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/people
* @endpoint POST /v1/people/{personId}/entities
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/people/duplicate-check
* @endpoint POST /v1/people/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/{personId}/entities/{associationId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/people/{associationId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/{personId}/entities/{associationId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}/corporate-title
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
* @usedBySchema EntityPersonAssociationSchema
* @usedBySchema PersonGraphMemberSchema
* @usedBySchema PersonSchema
* @contractShape person.image
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonFragments.kt
*/
var PersonImageSchema = object({
	/** Whether person image monogram */
	isMonogram: boolean(),
	picture: string().nullish()
});
//#endregion
//#region ../api-schemas/dist/entity/person-association.js
/**
* One entity↔person association, naming both sides
*
* @openapiSchema EntityPersonAssociation
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/people/{personId}/entities
* @endpoint GET /v1/people/{personId}/entities/{associationId}
* @endpoint POST /v1/entities/{entityId}/people
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/people/{personId}/entities
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/{personId}/entities/{associationId}
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/{entityId}/people/{associationId}
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/{personId}/entities/{associationId}
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}
* @endpoint DELETE /v1/entities/{entityId}/people/{associationId}/corporate-title
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}
* @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
* @usedBySchema PageEntityPersonAssociationSchema
* @usedBySchema PersonDetailSchema
* @usedBySchema PersonSimilarityResultSchema
* @contractShape entity.person-association
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entitypersonassociation/EntityPersonAssociation.kt
*/
var EntityPersonAssociationSchema = object({
	/** Integer person-entity association join row id, not a person or entity UUID */
	associationId: int(),
	createdAt: datetime({ offset: true }).nullish(),
	/** Association creator label */
	creator: string().nullish(),
	/** Association period end timestamp */
	endDate: datetime({ offset: true }).nullish(),
	/** Entity addresses carried on the association projection */
	entityAddress: array(AddressSchema),
	/** Associated entity id */
	entityId: uuid(),
	entityIsHidden: boolean().nullish(),
	/** Entity logo image projection */
	entityLogo: EntityImageSchema,
	entityName: string().nullish(),
	entityOperatingStatus: string().nullish(),
	entityShowOnSitemap: boolean().nullish(),
	/** Canonical lowercase URL slug for the resource */
	entitySlug: string().regex(/^[a-z0-9_-]+$/).max(255),
	/** Entity type classification */
	entityType: EntityTypeSchema.nullish(),
	/** Entity URL links carried on the association projection */
	entityUrlLink: array(EntityUrlLinkSchema),
	isCurrent: boolean().nullish(),
	/** Person addresses carried on the association projection */
	personAddress: array(AddressSchema),
	/** Associated person id */
	personId: uuid(),
	/** Person image projection */
	personImage: PersonImageSchema,
	personName: string(),
	/** Canonical lowercase URL slug for the resource */
	personSlug: string().regex(/^[a-z0-9_-]+$/).max(255),
	/** Person URL links carried on the association projection */
	personUrlLink: array(EntityUrlLinkSchema),
	score: int().nullish(),
	/** Association period start timestamp */
	startDate: datetime({ offset: true }).nullish(),
	/** Read-side corporate title function for the association row */
	titleFunction: string().nullish(),
	/** Corporate title id for the association row */
	titleId: int().nullish(),
	/** Read-side corporate title level for the association row */
	titleLevel: string().nullish(),
	/** Read-side corporate title text for the association row */
	titleName: string().nullish(),
	updatedAt: datetime({ offset: true }).nullish()
});
/**
* Supplemental person data — addresses and URL links
*
* @openapiSchema PersonEnrichment
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/detail
* @usedBySchema PersonDetailSchema
* @contractShape person.enrichment
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonEnrichment.kt
*/
var PersonEnrichmentSchema = object({
	/** Addresses associated with the person */
	address: array(AddressSchema),
	/** External and social URL links associated with the person */
	urlLink: array(EntityUrlLinkSchema)
});
//#endregion
//#region ../api-schemas/dist/entity/fundraise.js
/**
* Fundraise transaction metadata linked to a person investment
*
* @openapiSchema EntityFundraise
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/detail
* @usedBySchema PersonInvestmentSchema
* @contractShape entity.fundraise
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonInvestment.kt
*/
var EntityFundraiseSchema = object({
	amountRaised: number().nullish(),
	dateAnnounced: datetime({ offset: true }).nullish(),
	/** Canonical fundraise transaction UUID */
	id: uuid(),
	image: EntityImageSchema,
	investorCount: int().nullish(),
	nameBrand: string(),
	round: string().nullish(),
	status: string().nullish(),
	valuationPostMoney: number().nullish()
});
/**
* Company metadata associated with a person investment
*
* @openapiSchema PersonInvestedCompany
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/detail
* @usedBySchema PersonInvestmentSchema
* @contractShape person.invested-company
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonInvestment.kt
*/
var PersonInvestedCompanySchema = object({ entity: EntitySchema });
/**
* Domain model for a person's investment in an entity (fundraise transaction)
*
* @openapiSchema PersonInvestment
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/detail
* @usedBySchema PersonDetailSchema
* @contractShape person.investment
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonInvestment.kt
*/
var PersonInvestmentSchema = object({
	amount: number().nullish(),
	company: PersonInvestedCompanySchema,
	date: datetime({ offset: true }).nullish(),
	fundraiseTransaction: EntityFundraiseSchema.nullish(),
	/** Canonical fundraise transaction UUID */
	fundraiseTransactionId: uuid(),
	id: string(),
	investmentDate: datetime({ offset: true }),
	/** Investor-specific attribution for this person's participation in the fundraise round. amountInvested is a plain decimal number in the fundraise transaction currency and is not added to amount. */
	investorAttribution: FundraiseInvestmentAttributionSchema.nullish(),
	round: string().nullish()
});
//#endregion
//#region ../api-schemas/dist/content/source-type.js
/**
* Discriminator for unified content embedding source partitions
*
* @openapiSchema ContentSourceType
* @endpoint GET /v1/content/embedding/activity
* @endpoint GET /v1/content/embedding/backlog
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/people
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/people/duplicate-check
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint POST /v1/content/embedding/refresh/sweep
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/people
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/people/duplicate-check
* @endpoint POST /v1/people/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/content/embedding
* @endpoint PUT /v1/content/embedding/backlog
* @endpoint PUT /v1/content/embedding/backlog/mode
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/detail
* @endpoint DELETE /v1/content/embedding/backlog
* @usedBySchema ContentEmbeddingActivitySchema
* @usedBySchema ContentEmbeddingBacklogTypeCountSchema
* @usedBySchema ContentEmbeddingBacklogWorkSchema
* @usedBySchema ContentEmbeddingMatchSchema
* @usedBySchema ContentEmbeddingMutationSchema
* @usedBySchema ContentEmbeddingOwnerActivitySchema
* @contractShape content.source-type
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentSourceType.kt
*/
var ContentSourceTypeSchema = _enum([
	"entity",
	"person",
	"newsArticle",
	"blogPost",
	"text",
	"classificationTag",
	"classificationCode",
	"product",
	"service",
	"agentHelpDoc"
]);
//#endregion
//#region ../api-schemas/dist/content/embedding-match.js
/**
* Nearest-neighbor content embedding match evidence.
*
* @openapiSchema ContentEmbeddingMatch
* @endpoint GET /v1/entities
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/entities/detail/similar
* @endpoint GET /v1/people
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/people/duplicate-check
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint GET /v1/entities/{entityId}/products/suggestions
* @endpoint GET /v1/entities/{entityId}/relationships/suggestions
* @endpoint POST /v1/entities
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/entities/natural-search
* @endpoint POST /v1/people
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/people/duplicate-check
* @endpoint POST /v1/people/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/detail
* @usedBySchema EntityListSchema
* @usedBySchema PersonSchema
* @contractShape content.embedding-match
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentEmbeddingMatch.kt
*/
var ContentEmbeddingMatchSchema = object({
	/** Timestamp when the embedding row was computed. */
	computedAt: datetime({ offset: true }),
	/** pgvector cosine distance where lower is closer. */
	cosineDistance: number(),
	/** Cosine similarity score where higher is closer. */
	cosineScore: number(),
	/** Embedding model/profile version for this row. */
	modelVersion: string(),
	/** One-based semantic rank within the returned ANN candidate set. */
	rank: int(),
	/** SHA-256 hash of the source content. */
	sourceHash: string(),
	/** Content embedding source identifier. */
	sourceId: string(),
	/** Serialized JSONB source document stored for the embedding row. */
	sourceJson: string(),
	/** Source text used to compute the stored embedding. */
	sourceText: string(),
	/** Stored content embedding source partition. */
	sourceType: ContentSourceTypeSchema
});
//#endregion
//#region ../api-schemas/dist/person/visibility-status.js
/**
* Read projection: person visibility state
*
* @openapiSchema PersonVisibilityStatus
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/people
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/people/duplicate-check
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/people
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/people/duplicate-check
* @endpoint POST /v1/people/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/detail
* @usedBySchema PersonSchema
* @contractShape person.visibility-status
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonFragments.kt
*/
var PersonVisibilityStatusSchema = object({
	/** Whether the person is hidden from public pages. */
	isHidden: boolean(),
	/** Whether the person is eligible for sitemap/public listing. */
	showOnSitemap: boolean()
});
/**
* Canonical person core record
*
* @openapiSchema Person
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/people
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/people/detail/similar
* @endpoint GET /v1/people/duplicate-check
* @endpoint GET /v1/search/link
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/people
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint POST /v1/people/duplicate-check
* @endpoint POST /v1/people/natural-search
* @endpoint POST /v1/search/all
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/detail
* @usedBySchema PageEntityPersonSchema
* @usedBySchema PagePersonSchema
* @usedBySchema PageResultPersonSchema
* @usedBySchema PersonDetailSchema
* @usedBySchema PersonSimilarityResultSchema
* @contractShape person.person
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/Person.kt
*/
var PersonSchema = object({
	/** Record creation timestamp */
	createdAt: datetime({ offset: true }).nullish(),
	gender: string().nullish(),
	/** Canonical person UUID */
	id: uuid(),
	image: PersonImageSchema,
	/** Provenance-grounded last-modified watermark (schema.org dateModified): the latest effective time across all writes attributed to this person. */
	lastModifiedAt: datetime({ offset: true }).nullish(),
	/** Display and search aliases for this person */
	nameAlias: array(EntityNameAliasPersonAliasTypeSchema),
	nameFirst: string().nullish(),
	nameFull: string(),
	nameLast: string().nullish(),
	nameMiddle: string().nullish(),
	nickname: string().nullish(),
	/** Stable, immutable public handle (e.g. `pV1StGXR8Z5ab`). Never changes once assigned, unlike the slug. Null on projections that do not select it and on rows still awaiting handle backfill. */
	publicId: string().regex(/^p[0-9A-Za-z]{12}$/).nullish(),
	/** Semantic embedding match evidence populated only for semantic people reads. */
	semanticMatch: ContentEmbeddingMatchSchema.nullish(),
	/** Canonical lowercase URL slug for the resource */
	slug: string().regex(/^[a-z0-9_-]+$/).max(255),
	source: DatasourceSourceMetadataSchema,
	/** Privileged-only visibility and curation flags */
	status: PersonVisibilityStatusSchema.optional(),
	suffix: string().nullish(),
	/** Grouped person text content */
	text: EntityTextBundleSchema,
	/** Last modification timestamp */
	updatedAt: datetime({ offset: true }).nullish()
});
/**
* Composed person wrapper: core identity + enrichment + associations + investments. Access core fields via .core (for example .core.slug or .core.nameFull).
*
* @openapiSchema PersonDetail
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/entities/detail/people
* @endpoint GET /v1/entities/detail/person-investors
* @endpoint GET /v1/people/detail
* @endpoint GET /v1/entities/{entityId}/people
* @endpoint GET /v1/entities/{entityId}/people/{associationId}
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/people/batch
* @endpoint POST /v1/people/detail
* @endpoint POST /v1/people/detail/batch
* @endpoint PATCH /v1/entities/detail
* @endpoint PATCH /v1/people/detail
* @endpoint PUT /v1/entities/detail
* @endpoint PUT /v1/people/detail
* @usedBySchema EntityDetailSchema
* @usedBySchema PageEntityPersonSchema
* @usedBySchema PagePersonDetailSchema
* @usedBySchema PersonInvestorParticipationSchema
* @contractShape person.detail
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonDetail.kt
*/
var PersonDetailSchema = object({
	articleCount: int().nullish(),
	/** Entity associations for this person */
	association: array(EntityPersonAssociationSchema),
	core: PersonSchema,
	enrichment: PersonEnrichmentSchema,
	/** Investments associated with this person */
	investment: array(PersonInvestmentSchema),
	/** Display and search aliases for this person */
	nameAlias: array(EntityNameAliasPersonAliasTypeSchema),
	pendingApproval: int().nullish()
});
//#endregion
//#region ../api-schemas/dist/unique/id-type.js
/**
* External identifier type that maps an owner to a registry id: ein, secCik, ticker, lei, duns, isin, cusip, crd, or orcid.
*
* @openapiSchema UniqueIdType
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/unique-ids/lookup
* @endpoint GET /v1/entities/{entityId}/unique-ids
* @endpoint GET /v1/entities/{entityId}/unique-ids/{uniqueIdId}
* @endpoint GET /v1/people/{personId}/unique-ids
* @endpoint GET /v1/people/{personId}/unique-ids/{uniqueIdId}
* @endpoint POST /v1/entities/{entityId}/unique-ids
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/people/{personId}/unique-ids
* @endpoint POST /v1/sec/entities/{entityId}/identifiers
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/detail
* @endpoint DELETE /v1/entities/{entityId}/unique-ids/{uniqueIdId}
* @endpoint DELETE /v1/people/{personId}/unique-ids/{uniqueIdId}
* @usedBySchema UniqueIdSchema
* @contractShape unique.id-type
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/uniqueid/UniqueIdType.kt
*/
var UniqueIdTypeSchema = _enum([
	"ein",
	"secCik",
	"ticker",
	"lei",
	"duns",
	"isin",
	"cusip",
	"crd",
	"orcid"
]);
/**
* External identifier mapped to one owner (entity or person): for example a company's EIN, SEC CIK, or ticker symbol. Owner carries exactly one entityId or personId.
*
* @openapiSchema UniqueId
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint GET /v1/unique-ids/lookup
* @endpoint GET /v1/entities/{entityId}/unique-ids
* @endpoint GET /v1/entities/{entityId}/unique-ids/{uniqueIdId}
* @endpoint GET /v1/people/{personId}/unique-ids
* @endpoint GET /v1/people/{personId}/unique-ids/{uniqueIdId}
* @endpoint POST /v1/entities/{entityId}/unique-ids
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint POST /v1/people/{personId}/unique-ids
* @endpoint POST /v1/sec/entities/{entityId}/identifiers
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/detail
* @endpoint DELETE /v1/entities/{entityId}/unique-ids/{uniqueIdId}
* @endpoint DELETE /v1/people/{personId}/unique-ids/{uniqueIdId}
* @usedBySchema EntityDetailSchema
* @usedBySchema PageUniqueIdSchema
* @usedBySchema SecIdentifierMappingSchema
* @contractShape unique.id
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/uniqueid/UniqueId.kt
*/
var UniqueIdSchema = object({
	/** Row creation timestamp. */
	createdAt: datetime({ offset: true }),
	/** Unique-id row id. */
	id: int(),
	/** Identifier value as issued by the registry (normalized per type). */
	identifier: string(),
	/** Identifier type. */
	idType: UniqueIdTypeSchema,
	/** Owning entity or person id; exactly one nested id is present. */
	owner: EntityPersonOwnerSchema,
	/** Attribution source label for the mapping, when recorded. */
	source: string().nullish(),
	/** Row update timestamp. */
	updatedAt: datetime({ offset: true })
});
//#endregion
//#region ../api-schemas/dist/entity/detail.js
/**
* Full entity detail response: core entity, enrichment, governed research, relationships, external identifiers, fundraising, news, people, and sitemap eligibility. Core identity and naming fields live under core.
*
* @openapiSchema EntityDetail
* @endpoint GET /v1/entities/detail
* @endpoint GET /v1/entities/detail/investors
* @endpoint POST /v1/entities/batch
* @endpoint POST /v1/entities/detail
* @endpoint POST /v1/entities/detail/batch
* @endpoint POST /v1/entities/detail/full
* @endpoint POST /v1/entities/detail/resolve
* @endpoint PATCH /v1/entities/detail
* @endpoint PUT /v1/entities/detail
* @usedBySchema EntityCreateResultSchema
* @usedBySchema EntityInvestorParticipationSchema
* @usedBySchema EntityResolutionSchema
* @usedBySchema PageEntityDetailSchema
* @contractShape entity.detail
* @contractRole canonical
* @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityDetail.kt
*/
var EntityDetailSchema = object({
	/** Core entity identity, naming, status, image, and source metadata. */
	core: EntitySchema,
	/** Entity enrichment: addresses, classification, funding summary, text, and URL links. */
	enrichment: EntityEnrichmentSchema,
	/** Fundraise rounds associated with this entity. */
	fundraiseRound: array(EntityFundraiseTransactionSchema),
	/** News articles associated with this entity. */
	newsArticle: array(NewsSchema),
	/** People associated with this entity. */
	person: array(PersonDetailSchema),
	/** Absolute canonical public URL when this detail has a renderable public route. */
	publicUrl: string().nullish(),
	/** Entity relationships. */
	relationship: array(EntityRelationshipSchema),
	/** Combined research disclosure: governed detail rows, snippets, and accelerator participation. */
	research: EntityResearchSchema,
	/** Sub-route eligibility computed once at the persistence boundary. */
	sitemap: EntitySitemapSchema,
	/** External registry identifiers associated with this entity. */
	uniqueId: array(UniqueIdSchema)
});
//#endregion
export { EntityDetailSchema };

//# sourceMappingURL=detail-CKBtjE1F.js.map