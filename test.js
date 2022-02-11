test('should get track for Swedish market', done => {
    sinon.stub(HttpManager, '_makeRequest').callsFake(function(
      method,
      options,
      uri,
      callback
    ) {
      expect(method).toBe(superagent.get);
      expect(uri).toBe(
        'https://api.spotify.com/v1/tracks/3Qm86XLflmIXVm1wcwkgDK'
      );
      expect(options.query.market).toBe('SE');
      expect(options.data).toBeFalsy();
      callback();
    });

    var api = new SpotifyWebApi();
    api.getTrack('3Qm86XLflmIXVm1wcwkgDK', { market: 'SE' }).then(
      function(data) {
        done();
      },
      function(err) {
        done(new Error('Test failed!'));
      }
    );
  });