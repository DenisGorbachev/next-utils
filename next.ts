import { ParsedUrlQuery } from 'querystring'
import { GetServerSidePropsContext as $GetServerSidePropsContext, GetServerSidePropsResult, GetStaticPropsContext as $GetStaticPropsContext, GetStaticPropsResult } from 'next'

export type LocalizedContext = Required<Pick<$GetStaticPropsContext, 'locale' | 'locales' | 'defaultLocale'>>

export type GetStaticPropsContext<Q extends ParsedUrlQuery = ParsedUrlQuery> = $GetStaticPropsContext<Q> & LocalizedContext

export type GetServerSidePropsContext<Q extends ParsedUrlQuery = ParsedUrlQuery> = $GetServerSidePropsContext<Q> & LocalizedContext

export type GetStaticProps<
  P extends { [key: string]: unknown } = { [key: string]: unknown },
  Q extends ParsedUrlQuery = ParsedUrlQuery
  > = (
  context: GetStaticPropsContext<Q>
) => Promise<GetStaticPropsResult<P>> | GetStaticPropsResult<P>

export type GetServerSideProps<
  P extends { [key: string]: unknown } = { [key: string]: unknown },
  Q extends ParsedUrlQuery = ParsedUrlQuery
  > = (
  context: GetServerSidePropsContext<Q>
) => Promise<GetServerSidePropsResult<P>>
