import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Task: {}
};

const pluralNames = { 
  Task : 'task'
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
