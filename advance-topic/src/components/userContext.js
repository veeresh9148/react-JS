import React from 'react'

const UserContext = React.createContext('Veeresh')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }