import { Button, Container, createStyles, Image, SimpleGrid, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 32
    }
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      width: '100%'
    }
  },

  mobileImage: {
    [theme.fn.largerThan('xs')]: {
      display: 'none'
    }
  },

  desktopImage: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none'
    }
  }
}));

const NotFoundPage = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'xs', cols: 1, spacing: 40 }]}>
        <Image src="/img/image.404.svg" className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to
            another URL. If you think this is an error contact support.
          </Text>
          <Button component={Link} to="/" variant="outline" size="md" mt="xl" className={classes.control}>
            Get back to home page
          </Button>
        </div>
        <Image src={'/img/image.404.svg'} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
};

export default NotFoundPage;
