

import { EconomicEvent as EconomicEventType } from './generated/typegraphql-prisma/models/EconomicEvent';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
/**
 * CRUD operations for the EconomicEvent model.
 */

export const EconomicEvent = {

  /**
   * Create a new EconomicEvent record.
   * @param props - Properties for the new record.
   * @returns The created EconomicEvent or null.
   */

  async create(props: EconomicEventType): Promise<EconomicEventType> {

  const client = createApolloClient();

  const CREATE_ONE_ECONOMICEVENT = gql`
      mutation createOneEconomicEvent($data: EconomicEventCreateInput!) {
        createOneEconomicEvent(data: $data) {
  id
  title
  description
  date
  importance
  createdAt
  updatedAt
        }
      }
   `;

    const variables = {
      data: {
          title: props.title !== undefined ? props.title : undefined,
  description: props.description !== undefined ? props.description : undefined,
  date: props.date !== undefined ? props.date : undefined,
  importance: props.importance !== undefined ? props.importance : undefined,

      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_ONE_ECONOMICEVENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneEconomicEvent) {
        return response.data.createOneEconomicEvent;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneEconomicEvent:', error);
      throw error;
    }
  },

  /**
   * Create multiple EconomicEvent records.
   * @param props - Array of EconomicEvent objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: EconomicEventType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const CREATE_MANY_ECONOMICEVENT = gql`
      mutation createManyEconomicEvent($data: [EconomicEventCreateManyInput!]!) {
        createManyEconomicEvent(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  title: prop.title !== undefined ? prop.title : undefined,
  description: prop.description !== undefined ? prop.description : undefined,
  date: prop.date !== undefined ? prop.date : undefined,
  importance: prop.importance !== undefined ? prop.importance : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_ECONOMICEVENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyEconomicEvent) {
        return response.data.createManyEconomicEvent;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyEconomicEvent:', error);
      throw error;
    }
  },

  /**
   * Update a single EconomicEvent record.
   * @param props - Properties to update.
   * @returns The updated EconomicEvent or null.
   */
  async update(props: EconomicEventType): Promise<EconomicEventType> {

    const client = createApolloClient();

      const UPDATE_ONE_ECONOMICEVENT = gql`
      mutation updateOneEconomicEvent($data: EconomicEventUpdateInput!, $where: EconomicEventWhereUniqueInput!) {
        updateOneEconomicEvent(data: $data, where: $where) {
  id
  title
  description
  date
  importance
  createdAt
  updatedAt
      }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        title: props.title !== undefined ? {
            equals: props.title 
           } : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  title: props.title !== undefined ? {
            set: props.title 
           } : undefined,
  description: props.description !== undefined ? {
            set: props.description 
           } : undefined,
  date: props.date !== undefined ? {
            set: props.date 
           } : undefined,
  importance: props.importance !== undefined ? {
            set: props.importance 
           } : undefined,
  createdAt: props.createdAt !== undefined ? {
            set: props.createdAt 
           } : undefined,
  updatedAt: props.updatedAt !== undefined ? {
            set: props.updatedAt 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_ECONOMICEVENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneEconomicEvent) {
        return response.data.updateOneEconomicEvent;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneEconomicEvent:', error);
      throw error;
    }
  },

  /**
   * Update multiple EconomicEvent records.
   * @param props - Array of EconomicEvent objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: EconomicEventType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const UPDATE_MANY_ECONOMICEVENT = gql`
      mutation updateManyEconomicEvent($data: [EconomicEventCreateManyInput!]!) {
        updateManyEconomicEvent(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
                id: prop.id !== undefined ? prop.id : undefined,
        title: prop.title !== undefined ? {
            equals: prop.title 
           } : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  title: prop.title !== undefined ? {
            set: prop.title 
           } : undefined,
  description: prop.description !== undefined ? {
            set: prop.description 
           } : undefined,
  date: prop.date !== undefined ? {
            set: prop.date 
           } : undefined,
  importance: prop.importance !== undefined ? {
            set: prop.importance 
           } : undefined,
  createdAt: prop.createdAt !== undefined ? {
            set: prop.createdAt 
           } : undefined,
  updatedAt: prop.updatedAt !== undefined ? {
            set: prop.updatedAt 
           } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_ECONOMICEVENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyEconomicEvent) {
        return response.data.updateManyEconomicEvent;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyEconomicEvent:', error);
      throw error;
    }
  },

  /**
   * Delete a single EconomicEvent record.
   * @param props - Properties to update.
   * @returns The deleted EconomicEvent or null.
   */
  async delete(props: EconomicEventType): Promise<EconomicEventType> {

    const client = createApolloClient();

      const DELETE_ONE_ECONOMICEVENT = gql`
      mutation deleteOneEconomicEvent($where: EconomicEventWhereUniqueInput!) {
        deleteOneEconomicEvent(where: $where) {
  id
  title
  description
  date
  importance
  createdAt
  updatedAt
      }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_ECONOMICEVENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneEconomicEvent) {
        return response.data.deleteOneEconomicEvent;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneEconomicEvent:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single EconomicEvent record by ID.
   * @param props - Properties to update.
   * @returns The retrieved EconomicEvent or null.
   */
  async get(props: EconomicEventType): Promise<EconomicEventType | null> {

    const client = createApolloClient();

      const GET_ECONOMICEVENT = gql`
      query getEconomicEvent($where: EconomicEventWhereUniqueInput!) {
        getEconomicEvent(where: $where) {
  id
  title
  description
  date
  importance
  createdAt
  updatedAt
        }
      }`;

    const variables = {
      where: {
              id: props.id !== undefined ? props.id : undefined,
        title: props.title !== undefined ? {
            equals: props.title 
           } : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_ECONOMICEVENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getEconomicEvent ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No EconomicEvent found') {
        return null;
      } else {
        console.error('Error in getEconomicEvent:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all EconomicEvents records.
   * @returns An array of EconomicEvent records or null.
   */
  async getAll(): Promise<EconomicEventType[] | null> {

    const client = createApolloClient();

      const GET_ALL_ECONOMICEVENT = gql`
      query getAllEconomicEvent {
        economicEvents {
  id
  title
  description
  date
  importance
  createdAt
  updatedAt
      }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_ECONOMICEVENT });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.economicEvents ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No EconomicEvent found') {
        return null;
      } else {
        console.error('Error in getEconomicEvent:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple EconomicEvent records based on conditions.
   * @param props - Conditions to find records.
   * @returns An array of found EconomicEvent records or null.
   */
  async findMany(props: EconomicEventType): Promise<EconomicEventType[] | null> {

    const client = createApolloClient();

      const FIND_MANY_ECONOMICEVENT = gql`
      query findManyEconomicEvent($where: EconomicEventWhereInput!) {
        economicEvents(where: $where) {
  id
  title
  description
  date
  importance
  createdAt
  updatedAt
      }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? {
            equals: props.id 
           } : undefined,
        title: props.title !== undefined ? {
            equals: props.title 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_ECONOMICEVENT, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.EconomicEvents) {
        return response.data.economicEvents;
      } else {
       return [] as EconomicEventType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No EconomicEvent found') {
        return null;
      } else {
        console.error('Error in getEconomicEvent:', error);
        throw error;
      }
    }
  }
};
