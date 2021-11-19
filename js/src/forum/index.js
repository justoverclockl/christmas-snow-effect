import app from 'flarum/forum/app';
import { extend, override } from 'flarum/common/extend';
import Page from 'flarum/common/components/Page'
import IndexPage from 'flarum/forum/components/IndexPage'
import PostStream from 'flarum/forum/components/PostStream'


app.initializers.add('justoverclock/christmas-snow-effect', () => {
  extend(PostStream.prototype, 'view', function (vdom) {
    if (vdom.children && vdom.children.splice) {
      const insert = <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">
          ❅
        </div>
        <div className="snowflake">
          ❅
        </div>
        <div className="snowflake">
          ❆
        </div>
        <div className="snowflake">
          ❄
        </div>
        <div className="snowflake">
          ❅
        </div>
        <div className="snowflake">
          ❆
        </div>
        <div className="snowflake">
          ❄
        </div>
        <div className="snowflake">
          ❅
        </div>
        <div className="snowflake">
          ❆
        </div>
        <div className="snowflake">
          ❄
        </div>
      </div>
      vdom.children.splice(1, 0, insert);
    }
  })

  override(IndexPage.prototype, 'hero', function (original) {
    return (
      <>
        {original()}
        <div className="snowflakes" aria-hidden="true">
          <div className="snowflake">
            ❅
          </div>
          <div className="snowflake">
            ❅
          </div>
          <div className="snowflake">
            ❆
          </div>
          <div className="snowflake">
            ❄
          </div>
          <div className="snowflake">
            ❅
          </div>
          <div className="snowflake">
            ❆
          </div>
          <div className="snowflake">
            ❄
          </div>
          <div className="snowflake">
            ❅
          </div>
          <div className="snowflake">
            ❆
          </div>
          <div className="snowflake">
            ❄
          </div>
        </div>
      </>
    );
  });
});


