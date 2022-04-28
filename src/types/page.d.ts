type NextPage = import('next').NextPage
type DefaultNamespace = import('react-i18next').DefaultNamespace

declare namespace Page {
	type PageProps = {
		t: import('react-i18next').TFunction<DefaultNamespace, undefined>
	}

	type PageType<P extends Record<string, any> = Record<string, undefined>> = React.FC<
		NextPage & PageProps & P
	>
}
