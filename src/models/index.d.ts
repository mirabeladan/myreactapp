import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerEmail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Email, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Field0?: string | null;
  readonly Field1?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Email, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Field0?: string | null;
  readonly Field1?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Email = LazyLoading extends LazyLoadingDisabled ? EagerEmail : LazyEmail

export declare const Email: (new (init: ModelInit<Email>) => Email) & {
  copyOf(source: Email, mutator: (draft: MutableModel<Email>) => MutableModel<Email> | void): Email;
}