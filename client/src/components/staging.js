<div>
    <Grid
        container
        className={classes.root}
        spacing={0}
        align="center"
        justify="center"
        direction="column"
    >
        <Grid item>
            <Container
                component="main"
                maxWidth="xs"
            >
                <CssBaseline />
                <div className={classes.paper}>
                    <Grid 
                        className={classes.root}
                        container
                    >
                        <Grid item xs={12}>

                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <Button 
                                variant="contained"
                                color="primary"
                                component={Link}
                                to="/gallery"
                            >
                                Take a tour!
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                component={Link}
                                to="/contactus"
                            >
                                Contact Us
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </Grid>
    </Grid>
</div>