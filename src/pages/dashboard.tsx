import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import axios from 'axios'
import { LogoutIcon } from '@heroicons/react/solid'
import Layout from '../../components/layout'
import { QueryClient, useQueryClient } from '@tanstack/react-query'
import { UserInfo } from '../../components/UserInfo'
import { TaskForm } from '../../components/TaskForm'
import { TaskList } from '../../components/TaskList'

const Dashboard: NextPage = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const Logout = async () => {
    queryClient.removeQueries(['tasks'])
    queryClient.removeQueries(['user'])
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
    router.push('/')
  }
  return (
    <Layout title="Task Board">
      <LogoutIcon
        className="mb-6 h-6 w-6 cursor-ponter text-blue-500"
        onClick={Logout}
      ></LogoutIcon>
      <UserInfo />
      <TaskForm />
      <TaskList />
    </Layout>
  )
}

export default Dashboard
