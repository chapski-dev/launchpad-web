import { FC } from 'react'
import { Container } from '@/ui'
import { Task } from '@/ui/Task/Task'
import * as S from './style'

export const Profile: FC = () => {
  // const [isConnectWalletPopupOpen, setIsConnectWalletPopupOpen] =
  //   useState<boolean>(false)

  // const toggleConnectWalletPopup = useCallback(() => {
  //   setIsConnectWalletPopupOpen((prev) => !prev)
  // }, [])

  //   const router = useRouter()

  //   const { user } = useTelegram()

  // const { xapiProfileInfo, setXapiProfileFlag } = useProfileContext()

  //   const loadBlockpassWidget = useCallback(() => {
  //     const blockpass = new window.BlockpassKYCConnect(
  //       BLOCKPASS_CLIENT_ID as string, // service client_id from the admin console
  //       {
  //         refId: user?.id?.toString() || '', // assign the local user_id of the connected user
  //       }
  //     )
  //     blockpass?.startKYCConnect()

  //     blockpass.on('KYCConnectSuccess', () => {
  //       //add code that will trigger when data have been sent.
  //     })
  //   }, [user?.id])
  return (
    <S.Wrapper>
      <Container>
        <S.CompletingInfoBlock>
          <S.InfoTitle>Completing the profile creation</S.InfoTitle>
          <S.DescriptionInfo>
            Enter your wallet and complete the verification to start
            <br /> using the service.
          </S.DescriptionInfo>
        </S.CompletingInfoBlock>
        <S.TaskWrapper>
          {/* <Task
            description={xapiProfileInfo?.wallets?.task?.description}
            done={xapiProfileInfo?.wallets?.task?.done}
            onClick={toggleConnectWalletPopup}
            optional={xapiProfileInfo?.wallets?.task?.optional}
            status={
              xapiProfileInfo?.wallets?.task?.done ? 'done' : 'not-started'
            }
            title={xapiProfileInfo?.wallets?.task?.title}
            type="wallet"
          /> */}
          <div id="blockpass-kyc-connect">
            {' '}
            {/** этот айди является обязательным тк либа тригерится на onClick по нему, удалять нелья!  */}
            <Task
              description="Description"
              status="not-started"
              title="Connect Wallet"
              type="wallet"
            />
          </div>
          {/* {xapiProfileInfo?.social?.map((el) => (
            <Task
              description={el?.optional ? 'Optional' : ''}
              optional={el?.optional}
              status="not-started"
              title={el?.title}
              type={el?.type}
            />
          ))} */}
        </S.TaskWrapper>
      </Container>
    </S.Wrapper>
  )
}
