import React, { FC, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useTonAddress, useTonConnectModal } from '@tonconnect/ui-react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container } from 'ui'
import { ProjectInfoHeader } from './components/ProjectInfoHeader/ProjectInfoHeader'
import { Tokenomics } from './components/Tokenomics/Tokenomics'
import * as S from './style'
import {
  getICOProjectById,
  getProjectSaleState,
  queryUserSaleState,
} from '../../api/index'
import { BuyPopup } from '../../popups/BuyPopup/BuyPopup'

interface IProjectViewProps {
  first: string
  setFirst: React.Dispatch<React.SetStateAction<string>>
}

export const ProjectView: FC<IProjectViewProps> = ({ first, setFirst }) => {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)

  const { id } = useParams()

  const userWalletAddress = useTonAddress()

  const { open: openTonConnectModal } = useTonConnectModal()

  const {
    data: project,
    isLoading: isProjectLoading,
    isSuccess: isProjectLoaded,
  } = useQuery({
    queryKey: ['icoProject', id],
    queryFn: () => getICOProjectById(id as string),
    enabled: Boolean(id),
  })

  const { data: currentUserSaleState } = useQuery({
    queryKey: ['current-sale-state', project],
    queryFn: () => queryUserSaleState(project!.saleId as string, 'ton'),
    enabled: !!project?.saleId,
  })

  const { data: projectSaleState, isSuccess: isProjectStateLoaded } = useQuery({
    queryKey: ['project-sale-state', project],
    queryFn: () => getProjectSaleState(project!.saleId as string, 'ton'),
    enabled: !!project?.saleId,
  })

  const ToggleBuyPopUp = () => setOpen((prev) => !prev)

  return (
    <S.Wrapper>
      <Container>
        {project && (
          <S.BuyWrapper>
            <BuyPopup
              onClose={ToggleBuyPopUp}
              open={open}
              project={project}
              projectId={project.saleId}
              projectSaleState={projectSaleState!}
            />

            <ProjectInfoHeader
              description="Some test description for wrapperd eth"
              image=""
              title="Xton Platform"
            />
            <S.BuyButton children="Buy" onClick={() => setOpen(true)} />
          </S.BuyWrapper>
        )}

        <Tokenomics tokenomics={project?.tokenomics!} />
      </Container>
    </S.Wrapper>
  )
}
