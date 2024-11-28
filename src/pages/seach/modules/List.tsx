import { Card } from 'antd';
import { UserOutlined, CloudOutlined, FieldTimeOutlined } from '@ant-design/icons';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
interface HeaderBannerProps {
    keyword?: string | null; // 可选的字符串类型
}
const onChange: PaginationProps['onChange'] = (pageNumber) => {
    console.log('Page: ', pageNumber);
};
const List: React.FC<HeaderBannerProps> = ({ keyword }) => {
    return (
        <div className="h-full flex flex-col items-center justify-between" style={{ maxHeight: 'calc(100vh - 80px)'}}>
            <div className='w-900px h-32px leading-8'>云渊为您搜索<span className="text-sky-500">{keyword}</span>共<span className="text-sky-500">99998</span>条。</div>
            <div className='scrollable-content' style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
                <Card style={{ width: 900,height: 150, margin: '10px 0', cursor: 'pointer' }}>
                    <a className='text-lg font-semibold' href='/details/zcxasdqwe'>特工娇妻（隐婚后大佬夫妻每天撒糖虐炸）</a>
                    <p className='py-20px truncate'>影片时间线设定在1979年第一部《异形》与1986年的续集《异形2》之间，围绕一群年轻而勇敢的太空殖民者展开。讲述他们为逃离外星采矿殖民地的沉闷生活，在冒险探索一座废弃的太空站时，意外遭遇了宇宙中最可怕的生命体——异形。狭窄幽暗、危机四伏的空间站中，大逃杀的序幕已经被无情拉开，人类再次成为异形生物捕猎的目标。在无尽的黑暗与死亡威胁的笼罩之下，太空探险队员们能否在每一次心跳的瞬间，察觉到未知生物潜伏的丝丝寒意？在这场你死我活的追逐战中，他们将直面怎样的信任挑战和道德挣扎？当一个又一个同伴被残忍吞噬，求救无门的他们究竟能否在这场太空杀戮中寻得一线生机？</p>
                    <div>
                        <span className='mx-10px'><UserOutlined />TiAmo</span>
                        <span className='mx-10px'><CloudOutlined />夸克网盘</span>
                        <span className='mx-10px'><FieldTimeOutlined />2024-08-31</span>
                    </div>
                </Card>
                <Card style={{ width: 900,height: 150, margin: '10px 0', cursor: 'pointer' }}>
                    <a className='text-lg font-semibold'>特工娇妻（隐婚后大佬夫妻每天撒糖虐炸）</a>
                    <p className='py-20px truncate'>影片时间线设定在1979年第一部《异形》与1986年的续集《异形2》之间，围绕一群年轻而勇敢的太空殖民者展开。讲述他们为逃离外星采矿殖民地的沉闷生活，在冒险探索一座废弃的太空站时，意外遭遇了宇宙中最可怕的生命体——异形。狭窄幽暗、危机四伏的空间站中，大逃杀的序幕已经被无情拉开，人类再次成为异形生物捕猎的目标。在无尽的黑暗与死亡威胁的笼罩之下，太空探险队员们能否在每一次心跳的瞬间，察觉到未知生物潜伏的丝丝寒意？在这场你死我活的追逐战中，他们将直面怎样的信任挑战和道德挣扎？当一个又一个同伴被残忍吞噬，求救无门的他们究竟能否在这场太空杀戮中寻得一线生机？</p>
                    <div>
                        <span className='mx-10px'><UserOutlined />TiAmo</span>
                        <span className='mx-10px'><CloudOutlined />夸克网盘</span>
                        <span className='mx-10px'><FieldTimeOutlined />2024-08-31</span>
                    </div>
                </Card>
                <Card style={{ width: 900,height: 150, margin: '10px 0', cursor: 'pointer' }}>
                    <a className='text-lg font-semibold'>特工娇妻（隐婚后大佬夫妻每天撒糖虐炸）</a>
                    <p className='py-20px truncate'>影片时间线设定在1979年第一部《异形》与1986年的续集《异形2》之间，围绕一群年轻而勇敢的太空殖民者展开。讲述他们为逃离外星采矿殖民地的沉闷生活，在冒险探索一座废弃的太空站时，意外遭遇了宇宙中最可怕的生命体——异形。狭窄幽暗、危机四伏的空间站中，大逃杀的序幕已经被无情拉开，人类再次成为异形生物捕猎的目标。在无尽的黑暗与死亡威胁的笼罩之下，太空探险队员们能否在每一次心跳的瞬间，察觉到未知生物潜伏的丝丝寒意？在这场你死我活的追逐战中，他们将直面怎样的信任挑战和道德挣扎？当一个又一个同伴被残忍吞噬，求救无门的他们究竟能否在这场太空杀戮中寻得一线生机？</p>
                    <div>
                        <span className='mx-10px'><UserOutlined />TiAmo</span>
                        <span className='mx-10px'><CloudOutlined />夸克网盘</span>
                        <span className='mx-10px'><FieldTimeOutlined />2024-08-31</span>
                    </div>
                </Card>
                <Card style={{ width: 900,height: 150, margin: '10px 0', cursor: 'pointer' }}>
                    <a className='text-lg font-semibold'>特工娇妻（隐婚后大佬夫妻每天撒糖虐炸）</a>
                    <p className='py-20px truncate'>影片时间线设定在1979年第一部《异形》与1986年的续集《异形2》之间，围绕一群年轻而勇敢的太空殖民者展开。讲述他们为逃离外星采矿殖民地的沉闷生活，在冒险探索一座废弃的太空站时，意外遭遇了宇宙中最可怕的生命体——异形。狭窄幽暗、危机四伏的空间站中，大逃杀的序幕已经被无情拉开，人类再次成为异形生物捕猎的目标。在无尽的黑暗与死亡威胁的笼罩之下，太空探险队员们能否在每一次心跳的瞬间，察觉到未知生物潜伏的丝丝寒意？在这场你死我活的追逐战中，他们将直面怎样的信任挑战和道德挣扎？当一个又一个同伴被残忍吞噬，求救无门的他们究竟能否在这场太空杀戮中寻得一线生机？</p>
                    <div>
                        <span className='mx-10px'><UserOutlined />TiAmo</span>
                        <span className='mx-10px'><CloudOutlined />夸克网盘</span>
                        <span className='mx-10px'><FieldTimeOutlined />2024-08-31</span>
                    </div>
                </Card>
                <Card style={{ width: 900,height: 150, margin: '10px 0', cursor: 'pointer' }}>
                    <a className='text-lg font-semibold'>特工娇妻（隐婚后大佬夫妻每天撒糖虐炸）</a>
                    <p className='py-20px truncate'>影片时间线设定在1979年第一部《异形》与1986年的续集《异形2》之间，围绕一群年轻而勇敢的太空殖民者展开。讲述他们为逃离外星采矿殖民地的沉闷生活，在冒险探索一座废弃的太空站时，意外遭遇了宇宙中最可怕的生命体——异形。狭窄幽暗、危机四伏的空间站中，大逃杀的序幕已经被无情拉开，人类再次成为异形生物捕猎的目标。在无尽的黑暗与死亡威胁的笼罩之下，太空探险队员们能否在每一次心跳的瞬间，察觉到未知生物潜伏的丝丝寒意？在这场你死我活的追逐战中，他们将直面怎样的信任挑战和道德挣扎？当一个又一个同伴被残忍吞噬，求救无门的他们究竟能否在这场太空杀戮中寻得一线生机？</p>
                    <div>
                        <span className='mx-10px'><UserOutlined />TiAmo</span>
                        <span className='mx-10px'><CloudOutlined />夸克网盘</span>
                        <span className='mx-10px'><FieldTimeOutlined />2024-08-31</span>
                    </div>
                </Card>
                <Card style={{ width: 900,height: 150, margin: '10px 0', cursor: 'pointer' }}>
                    <a className='text-lg font-semibold'>特工娇妻（隐婚后大佬夫妻每天撒糖虐炸）</a>
                    <p className='py-20px truncate'>影片时间线设定在1979年第一部《异形》与1986年的续集《异形2》之间，围绕一群年轻而勇敢的太空殖民者展开。讲述他们为逃离外星采矿殖民地的沉闷生活，在冒险探索一座废弃的太空站时，意外遭遇了宇宙中最可怕的生命体——异形。狭窄幽暗、危机四伏的空间站中，大逃杀的序幕已经被无情拉开，人类再次成为异形生物捕猎的目标。在无尽的黑暗与死亡威胁的笼罩之下，太空探险队员们能否在每一次心跳的瞬间，察觉到未知生物潜伏的丝丝寒意？在这场你死我活的追逐战中，他们将直面怎样的信任挑战和道德挣扎？当一个又一个同伴被残忍吞噬，求救无门的他们究竟能否在这场太空杀戮中寻得一线生机？</p>
                    <div>
                        <span className='mx-10px'><UserOutlined />TiAmo</span>
                        <span className='mx-10px'><CloudOutlined />夸克网盘</span>
                        <span className='mx-10px'><FieldTimeOutlined />2024-08-31</span>
                    </div>
                </Card>
                <Card style={{ width: 900,height: 150, margin: '10px 0', cursor: 'pointer' }}>
                    <a className='text-lg font-semibold'>特工娇妻（隐婚后大佬夫妻每天撒糖虐炸）</a>
                    <p className='py-20px truncate'>影片时间线设定在1979年第一部《异形》与1986年的续集《异形2》之间，围绕一群年轻而勇敢的太空殖民者展开。讲述他们为逃离外星采矿殖民地的沉闷生活，在冒险探索一座废弃的太空站时，意外遭遇了宇宙中最可怕的生命体——异形。狭窄幽暗、危机四伏的空间站中，大逃杀的序幕已经被无情拉开，人类再次成为异形生物捕猎的目标。在无尽的黑暗与死亡威胁的笼罩之下，太空探险队员们能否在每一次心跳的瞬间，察觉到未知生物潜伏的丝丝寒意？在这场你死我活的追逐战中，他们将直面怎样的信任挑战和道德挣扎？当一个又一个同伴被残忍吞噬，求救无门的他们究竟能否在这场太空杀戮中寻得一线生机？</p>
                    <div>
                        <span className='mx-10px'><UserOutlined />TiAmo</span>
                        <span className='mx-10px'><CloudOutlined />夸克网盘</span>
                        <span className='mx-10px'><FieldTimeOutlined />2024-08-31</span>
                    </div>
                </Card>
                <Card style={{ width: 900,height: 150, margin: '10px 0', cursor: 'pointer' }}>
                    <a className='text-lg font-semibold'>特工娇妻（隐婚后大佬夫妻每天撒糖虐炸）</a>
                    <p className='py-20px truncate'>影片时间线设定在1979年第一部《异形》与1986年的续集《异形2》之间，围绕一群年轻而勇敢的太空殖民者展开。讲述他们为逃离外星采矿殖民地的沉闷生活，在冒险探索一座废弃的太空站时，意外遭遇了宇宙中最可怕的生命体——异形。狭窄幽暗、危机四伏的空间站中，大逃杀的序幕已经被无情拉开，人类再次成为异形生物捕猎的目标。在无尽的黑暗与死亡威胁的笼罩之下，太空探险队员们能否在每一次心跳的瞬间，察觉到未知生物潜伏的丝丝寒意？在这场你死我活的追逐战中，他们将直面怎样的信任挑战和道德挣扎？当一个又一个同伴被残忍吞噬，求救无门的他们究竟能否在这场太空杀戮中寻得一线生机？</p>
                    <div>
                        <span className='mx-10px'><UserOutlined />TiAmo</span>
                        <span className='mx-10px'><CloudOutlined />夸克网盘</span>
                        <span className='mx-10px'><FieldTimeOutlined />2024-08-31</span>
                    </div>
                </Card>
            </div>
            <div className='h-40px'>
                <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
            </div>
        </div>
    )
}
export default List;