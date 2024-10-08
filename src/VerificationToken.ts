

import { VerificationToken as VerificationTokenType } from './generated/typegraphql-prisma/models/VerificationToken';
import { ApolloClient, ApolloError, gql, NormalizedCacheObject } from '@apollo/client';
import {initializeApolloServerSide} from './client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the VerificationToken model.
 */

export const VerificationToken = {
  /**
   * Create a new VerificationToken record.
   * @param props - Properties for the new record.
   * @param client - Apollo Client instance.
   * @returns The created VerificationToken or null.
   */
  async create(props: VerificationTokenType): Promise<VerificationTokenType> {

  const client = await initializeApolloServerSide();

  const CREATE_ONE_VERIFICATIONTOKEN = gql`
      mutation createOneVerificationToken($data: VerificationTokenCreateInput!) {
        createOneVerificationToken(data: $data) {
          id
          identifier
          token
          expires
        }
      }
   `;

    const variables = {
      data: {
          identifier: props.identifier !== undefined ? props.identifier : undefined,
  token: props.token !== undefined ? props.token : undefined,
  expires: props.expires !== undefined ? props.expires : undefined,

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_ONE_VERIFICATIONTOKEN, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneVerificationToken) {
        return response.data.createOneVerificationToken;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneVerificationToken:', error);
      throw error;
    }
  },

  /**
   * Create multiple VerificationToken records.
   * @param props - Array of properties for the new records.
   * @param client - Apollo Client instance.
   * @returns The count of created records or null.
   */
  async createMany(props: VerificationTokenType[]): Promise<{ count: number } | null> {

    const client = await initializeApolloServerSide();

    const CREATE_MANY_VERIFICATIONTOKEN = gql`
      mutation createManyVerificationToken($data: [VerificationTokenCreateManyInput!]!) {
        createManyVerificationToken(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  identifier: prop.identifier !== undefined ? prop.identifier : undefined,
  token: prop.token !== undefined ? prop.token : undefined,
  expires: prop.expires !== undefined ? prop.expires : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_VERIFICATIONTOKEN, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyVerificationToken) {
        return response.data.createManyVerificationToken;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyVerificationToken:', error);
      throw error;
    }
  },

  /**
   * Update a single VerificationToken record.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The updated VerificationToken or null.
   */
  async update(props: VerificationTokenType): Promise<VerificationTokenType> {

    const client = await initializeApolloServerSide();

    const UPDATE_ONE_VERIFICATIONTOKEN = gql`
      mutation updateOneVerificationToken($data: VerificationTokenUpdateInput!, $where: VerificationTokenWhereUniqueInput!) {
        updateOneVerificationToken(data: $data, where: $where) {
          id
          identifier
          token
          expires
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
      },
      data: {
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_VERIFICATIONTOKEN, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneVerificationToken) {
        return response.data.updateOneVerificationToken;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneVerificationToken:', error);
      throw error;
    }
  },

  /**
   * Delete a single VerificationToken record.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The deleted VerificationToken or null.
   */
  async delete(props: VerificationTokenType): Promise<VerificationTokenType> {

    const client = await initializeApolloServerSide();

    const DELETE_ONE_VERIFICATIONTOKEN = gql`
      mutation deleteOneVerificationToken($where: VerificationTokenWhereUniqueInput!) {
        deleteOneVerificationToken(where: $where) {
          id
          identifier
          token
          expires
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_VERIFICATIONTOKEN, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneVerificationToken) {
        return response.data.deleteOneVerificationToken;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneVerificationToken:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single VerificationToken record by ID.
   * @param props - Properties to update.
   * @param client - Apollo Client instance.
   * @returns The retrieved VerificationToken or null.
   */
  async get(props: VerificationTokenType): Promise<VerificationTokenType | null> {

    const client = await initializeApolloServerSide();

    const GET_VERIFICATIONTOKEN = gql`
      query getVerificationToken($where: VerificationTokenWhereUniqueInput!) {
        getVerificationToken(where: $where) {
          id
          identifier
          token
          expires
        }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_VERIFICATIONTOKEN, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getVerificationToken ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No VerificationToken found') {
        return null;
      } else {
        console.error('Error in getVerificationToken:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all VerificationTokens records.
   * @param client - Apollo Client instance.
   * @returns An array of VerificationToken records or null.
   */
  async getAll(): Promise<VerificationTokenType[] | null> {

    const client = await initializeApolloServerSide();

    const GET_ALL_VERIFICATIONTOKEN = gql`
      query getAllVerificationToken {
        verificationTokens {
          id
          identifier
          token
          expires
      }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_VERIFICATIONTOKEN });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.verificationTokens ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No VerificationToken found') {
        return null;
      } else {
        console.error('Error in getVerificationToken:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple VerificationToken records based on conditions.
   * @param where - Conditions to find records.
   * @param client - Apollo Client instance.
   * @returns An array of found VerificationToken records or null.
   */
  async findMany(props: VerificationTokenType): Promise<VerificationTokenType[] | null> {

    const client = await initializeApolloServerSide();

    const FIND_MANY_VERIFICATIONTOKEN = gql`
      query findManyVerificationToken($where: VerificationTokenWhereInput!) {
        verificationTokens(where: $where) {
          id
          identifier
          token
          expires
      }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? {
            equals: props.id 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_VERIFICATIONTOKEN, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.VerificationTokens) {
        return response.data.verificationTokens;
      } else {
       return [] as VerificationTokenType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No VerificationToken found') {
        return null;
      } else {
        console.error('Error in getVerificationToken:', error);
        throw error;
      }
    }
  }
};
