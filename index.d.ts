interface JsonApi {
  version?:string;
  meta?:any;
}

interface JsonApiLinks {
  next?:string;
  last?:string;
  related?:JsonApiRelatedResourceLink;
  self?:string;
  pagination?:JsonApiPaginationLinks;
}

interface JsonApiRelatedResourceLink {
  href?:string;
  meta?:any;
}

interface JsonApiPaginationLinks {
  first:string;
  last:string;
  prev:string;
  next:string;
}

interface JsonApiData {
  
}

interface JsonApiDocument {
  links?:JsonApiLinks;
  errors?:Array<any>;
  meta?:any;
  jsonapi?:JsonApi;
}


