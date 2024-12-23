import nx from '@jswork/next';
import EventMitt from '@jswork/event-mitt';

// classes
import '@jswork/next-local-storage';
import '@jswork/next-session-storage';
import '@jswork/next-json2base64';

// packages
import '@jswork/next-camelize';
import '@jswork/next-capitalize';
import '@jswork/next-classify';
import '@jswork/next-camelize';
import '@jswork/next-compact-object';
import '@jswork/next-deep-assign';
import '@jswork/next-deep-clone';
import '@jswork/next-deep-each';
import '@jswork/next-deep-equal';
import '@jswork/next-empty';
import '@jswork/next-get2get';
import '@jswork/next-is-empty-object';
import '@jswork/next-is-plain-object';
import '@jswork/next-kebab-case';
import '@jswork/next-key-map';
import '@jswork/next-param';
import '@jswork/next-qs';
import '@jswork/next-sets';
import '@jswork/next-json';
import '@jswork/next-wait-until';
import '@jswork/next-global';
import '@jswork/next-group-by';
import '@jswork/next-group-search';
import '@jswork/next-min-by';
import '@jswork/next-max-by';
import '@jswork/next-nl2br';
import '@jswork/next-root-dispatch';
import '@jswork/next-get-nil';
import '@jswork/next-is-empty-fields';
import '@jswork/next-guid';
import '@jswork/next-toggle-to';
import '@jswork/next-defaults';
import '@jswork/next-defaults-validate';
import '@jswork/next-sample';
import '@jswork/next-remove-keys';

// rc components
import '@jswork/next-rc-components';

// hacks
import '@jswork/fix-react-warning';

const defaults = { prefix: 'nak' };

const NxWebToolkits = nx.declare('nx.WebToolkits', {
  statics: {
    create: function (inOptions) {
      return new this(inOptions);
    }
  },
  methods: {
    init: function (inOptions) {
      this.options = nx.mix(null, defaults, inOptions);
      nx.global(null);
      this.initLocal();
      this.initEvent();
    },
    initLocal: function () {
      const { prefix } = this.options;
      nx.sets({ $local: new nx.LocalStorage(prefix) });
      nx.sets({ $session: new nx.SessionStorage(prefix) });
    },
    initEvent: function () {
      nx.sets({ $event: nx.mix(null, EventMitt) });
    }
  }
});

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxWebToolkits;
}

export default NxWebToolkits;
