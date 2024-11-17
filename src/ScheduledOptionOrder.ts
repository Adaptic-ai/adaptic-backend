
  
import { ScheduledOptionOrder as ScheduledOptionOrderType } from './generated/typegraphql-prisma/models/ScheduledOptionOrder';
import { ApolloError, gql } from '@apollo/client';
import { createApolloClient } from './client';
import { removeUndefinedProps } from './utils';
  
  /**
   * CRUD operations for the ScheduledOptionOrder model.
   */

  const selectionSet = `
    
  id
  payload
  status

  `;

  export const ScheduledOptionOrder = {

    /**
     * Create a new ScheduledOptionOrder record.
     * @param props - Properties for the new record.
     * @returns The created ScheduledOptionOrder or null.
     */

    async create(props: ScheduledOptionOrderType): Promise<ScheduledOptionOrderType> {

    const client = createApolloClient();

    const CREATE_ONE_SCHEDULEDOPTIONORDER = gql`
        mutation createOneScheduledOptionOrder($data: ScheduledOptionOrderCreateInput!) {
          createOneScheduledOptionOrder(data: $data) {
            ${selectionSet}
          }
        }
     `;

      const variables = {
        data: {
            payload: props.payload !== undefined ? props.payload : undefined,
  status: props.status !== undefined ? props.status : undefined,

        },
      };

      const filteredVariables = removeUndefinedProps(variables);

      try {
      const response = await client.mutate({ mutation: CREATE_ONE_SCHEDULEDOPTIONORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createOneScheduledOptionOrder) {
        return response.data.createOneScheduledOptionOrder;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createOneScheduledOptionOrder:', error);
      throw error;
    }
  },

  /**
   * Create multiple ScheduledOptionOrder records.
   * @param props - Array of ScheduledOptionOrder objects for the new records.
   * @returns The count of created records or null.
   */
  async createMany(props: ScheduledOptionOrderType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const CREATE_MANY_SCHEDULEDOPTIONORDER = gql`
      mutation createManyScheduledOptionOrder($data: [ScheduledOptionOrderCreateManyInput!]!) {
        createManyScheduledOptionOrder(data: $data) {
          count
        }
      }`;

    const variables = {
      data: props.map(prop => ({
  payload: prop.payload !== undefined ? prop.payload : undefined,
  status: prop.status !== undefined ? prop.status : undefined,
      })),
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: CREATE_MANY_SCHEDULEDOPTIONORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.createManyScheduledOptionOrder) {
        return response.data.createManyScheduledOptionOrder;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in createManyScheduledOptionOrder:', error);
      throw error;
    }
  },

  /**
   * Update a single ScheduledOptionOrder record.
   * @param props - Properties to update.
   * @returns The updated ScheduledOptionOrder or null.
   */
  async update(props: ScheduledOptionOrderType): Promise<ScheduledOptionOrderType> {

    const client = createApolloClient();

      const UPDATE_ONE_SCHEDULEDOPTIONORDER = gql`
      mutation updateOneScheduledOptionOrder($data: ScheduledOptionOrderUpdateInput!, $where: ScheduledOptionOrderWhereUniqueInput!) {
        updateOneScheduledOptionOrder(data: $data, where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  status: props.status !== undefined ? props.status : undefined,
      },
      data: {
  id: props.id !== undefined ? {
            set: props.id 
           } : undefined,
  payload: props.payload !== undefined ? {
            set: props.payload 
           } : undefined,
  status: props.status !== undefined ? {
            set: props.status 
           } : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_ONE_SCHEDULEDOPTIONORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateOneScheduledOptionOrder) {
        return response.data.updateOneScheduledOptionOrder;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateOneScheduledOptionOrder:', error);
      throw error;
    }
  },

  /**
   * Update multiple ScheduledOptionOrder records.
   * @param props - Array of ScheduledOptionOrder objects for the updated records.
   * @returns The count of created records or null.
   */
  async updateMany(props: ScheduledOptionOrderType[]): Promise<{ count: number } | null> {

    const client = createApolloClient();

      const UPDATE_MANY_SCHEDULEDOPTIONORDER = gql`
      mutation updateManyScheduledOptionOrder($data: [ScheduledOptionOrderCreateManyInput!]!) {
        updateManyScheduledOptionOrder(data: $data) {
          count
        }
      }`;

    const variables = props.map(prop => ({
      where: {
          id: prop.id !== undefined ? prop.id : undefined,
  status: prop.status !== undefined ? prop.status : undefined,

      },
      data: {
          id: prop.id !== undefined ? {
            set: prop.id 
           } : undefined,
  payload: prop.payload !== undefined ? {
            set: prop.payload 
           } : undefined,
  status: prop.status !== undefined ? {
            set: prop.status 
           } : undefined,

      },
      }));


    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: UPDATE_MANY_SCHEDULEDOPTIONORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.updateManyScheduledOptionOrder) {
        return response.data.updateManyScheduledOptionOrder;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in updateManyScheduledOptionOrder:', error);
      throw error;
    }
  },

  /**
   * Delete a single ScheduledOptionOrder record.
   * @param props - Properties to update.
   * @returns The deleted ScheduledOptionOrder or null.
   */
  async delete(props: ScheduledOptionOrderType): Promise<ScheduledOptionOrderType> {

    const client = createApolloClient();

      const DELETE_ONE_SCHEDULEDOPTIONORDER = gql`
      mutation deleteOneScheduledOptionOrder($where: ScheduledOptionOrderWhereUniqueInput!) {
        deleteOneScheduledOptionOrder(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id ? props.id : undefined,
      }
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.mutate({ mutation: DELETE_ONE_SCHEDULEDOPTIONORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.deleteOneScheduledOptionOrder) {
        return response.data.deleteOneScheduledOptionOrder;
      } else {
        return null as any;
      }
    } catch (error) {
      console.error('Error in deleteOneScheduledOptionOrder:', error);
      throw error;
    }
  },

  /**
   * Retrieve a single ScheduledOptionOrder record by ID.
   * @param props - Properties to update.
   * @returns The retrieved ScheduledOptionOrder or null.
   */
  async get(props: ScheduledOptionOrderType): Promise<ScheduledOptionOrderType | null> {

    const client = createApolloClient();

      const GET_SCHEDULEDOPTIONORDER = gql`
      query getScheduledOptionOrder($where: ScheduledOptionOrderWhereUniqueInput!) {
        getScheduledOptionOrder(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
        id: props.id !== undefined ? props.id : undefined,
  status: props.status !== undefined ? props.status : undefined,
},
};
    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: GET_SCHEDULEDOPTIONORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.getScheduledOptionOrder ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No ScheduledOptionOrder found') {
        return null;
      } else {
        console.error('Error in getScheduledOptionOrder:', error);
        throw error;
      }
    }
  },

  /**
   * Retrieve all ScheduledOptionOrders records.
   * @returns An array of ScheduledOptionOrder records or null.
   */
  async getAll(): Promise<ScheduledOptionOrderType[] | null> {

    const client = createApolloClient();

      const GET_ALL_SCHEDULEDOPTIONORDER = gql`
      query getAllScheduledOptionOrder {
        scheduledOptionOrders {
          ${selectionSet}
        }
      }`;

    try {
      const response = await client.query({ query: GET_ALL_SCHEDULEDOPTIONORDER });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      return response.data?.scheduledOptionOrders ?? null;
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No ScheduledOptionOrder found') {
        return null;
      } else {
        console.error('Error in getScheduledOptionOrder:', error);
        throw error;
      }
    }
  },

  /**
   * Find multiple ScheduledOptionOrder records based on conditions.
   * @param props - Conditions to find records.
   * @returns An array of found ScheduledOptionOrder records or null.
   */
  async findMany(props: ScheduledOptionOrderType): Promise<ScheduledOptionOrderType[] | null> {

    const client = createApolloClient();

      const FIND_MANY_SCHEDULEDOPTIONORDER = gql`
      query findManyScheduledOptionOrder($where: ScheduledOptionOrderWhereInput!) {
        scheduledOptionOrders(where: $where) {
          ${selectionSet}
        }
      }`;

    const variables = {
      where: {
  id: props.id !== undefined ? {
    equals: props.id 
  } : undefined,
  status: props.status !== undefined ? props.status : undefined,
      },
    };

    const filteredVariables = removeUndefinedProps(variables);

    try {
      const response = await client.query({ query: FIND_MANY_SCHEDULEDOPTIONORDER, variables: filteredVariables });
      if (response.errors && response.errors.length > 0) throw new Error(response.errors[0].message);
      if (response && response.data && response.data.ScheduledOptionOrders) {
        return response.data.scheduledOptionOrders;
      } else {
       return [] as ScheduledOptionOrderType[];
      }
    } catch (error) {
      if (error instanceof ApolloError && error.message === 'No ScheduledOptionOrder found') {
        return null;
      } else {
        console.error('Error in getScheduledOptionOrder:', error);
        throw error;
      }
    }
  }
};