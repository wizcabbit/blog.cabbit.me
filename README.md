blog.cabbit.me
=========

Wang Zhi Yong's blog site.

+ Built upon jekyll, pure static web site
+ "Hanzi" provides best reading experience
+ Grunt tool to implement automotive delivery
+ Bower as the package management

Please feel free to download and build you own portfolio

## Development

1. Fork as new git solution
2. Modify site's configurations

  ```json
  _config.yml
  
  url: http://localhost:9007
  is_debug: true
  
  author_info: <a href="http://blog.cabbit.me/">wizcabbit</a>
  ```

3. Delete Google Analytics or replace with your own

  ```javascript
  Line 29 of _layouts/default.html
  
  <script type="text/javascript">
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','UA-55766499-2','auto');ga('send','pageview');
  </script>
  ```

4. Delete Disqus or replace with your own

  ```html
  Line 13 of _layouts/post.html
  
  <div id="comments">
      <div id="disqus_thread"></div>
      <script type="text/javascript">
        var disqus_shortname = 'blogcabbitme';
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
      </script>
      <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </div>
  ```

5. Jekyll's build command in base path of solution:

  ```shell
  jekyll build --watch
  ```

## Deploy

1. Modify site's configurations:

  ```json
  _config_release.yml
  
  url: http://blog.cabbit.me
  is_debug: false
  
  ```

2. Modify grunt's automotive tasks (FTP settings):

  ```json
  Line 44 of Gruntfile.js
  
  ftpush: {
    deploy: {
      auth: {
        host: 'srv.cabbit.me',
        port: 21,
        authKey: 'www'
      },
      src: './_site',
      dest: './blog'
    }
  ```

3. Grunt to automotive deploy site

  ```shell
  grunt release // Only release site, combine static resources and minify them
  
  or
  
  grunt deploy // Release and deploy site to FTP
  ```
